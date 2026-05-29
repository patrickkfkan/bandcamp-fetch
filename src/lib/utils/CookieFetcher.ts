import type { PuppeteerNode, Page } from 'puppeteer';
import type { PuppeteerExtra } from 'puppeteer-extra';
import type StealthPlugin from 'puppeteer-extra-plugin-stealth'
import loadEsmPkg from 'load-esm';
import { type Logger } from './Logger.js';

const { loadEsm } = loadEsmPkg;

export default class CookieFetcher {
  /**
   * Gets an anonymous cookie by launching a headless browser,
   * visiting the Bandcamp homepage, and accepting the cookie consent
   * dialog if it appears. This is necessary to bypass certain CDN
   * checks that require a cookie to access some resources.
   * This method requires the following dependencies to be installed:
   *   puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
   */
  static async getAnonymousCookie(logger: Logger) {
    logger.debug('CookieFetcher: begin fetching anonymous cookie');
    const puppeteer = await this.#getPuppeteer(logger);
    const browser = await puppeteer.launch({ 
      headless: true,
      args: [
        '--disable-blink-features=AutomationControlled' // Removes the automated bot flag
      ]
    });

    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    await page.setUserAgent({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    try {
      // Visit Bandcamp homepage
      logger.debug('CookieFetcher: visiting Bandcamp homepage');
      await page.goto('https://bandcamp.com', { waitUntil: 'networkidle2' });

      // Handle cookie consent dialog if it appears
      await this.#handleCookieDialog(page, logger);

      // Navigate to another page to ensure the cookie is set
      logger.debug('CookieFetcher: navigating to discover page');
      await page.goto('https://bandcamp.com/discover', { waitUntil: 'networkidle2' });

      // Fetch and return the cookie
      const cookies = await page.browserContext().cookies();
      const targetUrl = new URL(page.url());
      const filteredCookies = cookies.filter(cookie => {
        // Matches exact domain (e.g., bandcamp.com) or subdomains (.bandcamp.com)
        return targetUrl.hostname.endsWith(cookie.domain.replace(/^\./, ''));
      });
      const cookieString = filteredCookies
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ');

      logger.debug(`CookieFetcher: anonymous cookie: ${cookieString.replace(/=([^;]+)/g, '=...')}`);

      return cookieString;
    } finally {
      await browser.close();
    }
  }

  /**
   * Dynamically imports puppeteer and the stealth plugin. Returns null if import fails (e.g., not installed).
   * @returns 
   */
  static async #getPuppeteer(logger: Logger) {
    let puppeteer: PuppeteerNode | null;
    let puppeteerExtra: PuppeteerExtra | null = null;
    let stealth: typeof StealthPlugin | null;
    try {
      logger.debug('CookieFetcher: attempting to import puppeteer');
      puppeteer = (await loadEsm('puppeteer')).default;
    }
    catch (error) {
      logger.debug(`CookieFetcher: failed to import puppeteer: ${ this.#getErrorMessage(error) }`);
      puppeteer = null;
    }
    if (puppeteer) {
      try {
        logger.debug('CookieFetcher: attempting to import puppeteer-extra');
        const { addExtra } = (await loadEsm('puppeteer-extra'));
        puppeteerExtra = addExtra(puppeteer);
      }
      catch (error) {
        logger.debug(`CookieFetcher: failed to import puppeteer-extra: ${ this.#getErrorMessage(error) }`);
        puppeteerExtra = null;
      }
    }
    if (puppeteerExtra) {
      try {
        logger.debug('CookieFetcher: attempting to import puppeteer-extra-plugin-stealth');
        stealth = (await loadEsm('puppeteer-extra-plugin-stealth')).default;
      }
      catch (error) {
        logger.debug(`CookieFetcher: failed to import puppeteer-extra-plugin-stealth: ${ this.#getErrorMessage(error) }`);
        stealth = null;
      }
      if (stealth) {
        puppeteerExtra.use(stealth());
      }
      logger.debug(`CookieFetcher: using puppeteer-extra${stealth ? ' with stealth plugin' : ''} for anonymous cookie fetching`);
      return puppeteerExtra;
    }
    if (puppeteer) {
      logger.debug('CookieFetcher: using puppeteer for anonymous cookie fetching');
      return puppeteer;
    }
    throw Error('Puppeteer is not installed or otherwise unavailable. Install puppeteer or puppeteer-extra with puppeteer-extra-plugin-stealth to enable anonymous cookie fetching.');
  }

  /**
   * Performs the following actions:
   * - Detect cookie consent dialog.
   * - Click the accept button if it appears.
   * - Wait for the dialog to disappear.
   * We do not assume the dialog will always appear, in which case we will just return silently.
   * @param page 
   * @param logger 
   */
  static async #handleCookieDialog(page: Page, logger: Logger) {
    const dialogSelector = '.cookie-dialog-initial';
    const buttonSelector = '.cookie-dialog-initial .buttons button.g-button';
    let consentButton;
    try {
      logger.debug('CookieFetcher: detecting cookie consent dialog');
      consentButton = await page.waitForSelector(
        buttonSelector,
        { visible: true, timeout: 5000 }
      );
    } catch (_) {
      logger.debug('CookieFetcher: no cookie consent dialog detected');
      return;
    }
    if (consentButton) {
        logger.debug('CookieFetcher: cookie consent dialog found, clicking accept button');
        try {
          await consentButton.click();
          logger.debug('CookieFetcher: waiting for cookie consent dialog to close');
          await page.waitForSelector(dialogSelector, { hidden: true, timeout: 5000 });
          logger.debug('CookieFetcher: cookie consent dialog handled successfully');
        }
        catch (error) {
          logger.debug(`CookieFetcher: error while handling cookie consent dialog: ${ this.#getErrorMessage(error) }`);
        }
    }
  }

  static #getErrorMessage(error: unknown) {
    return error instanceof Error ? error.message : String(error);
  }
}