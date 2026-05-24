import type { Page } from 'puppeteer';

export default class CookieFetcher {
  /**
   * Gets an anonymous cookie by launching a headless browser,
   * visiting the Bandcamp homepage, and accepting the cookie consent
   * dialog if it appears. This is necessary to bypass certain CDN
   * checks that require a cookie to access some resources.
   * This method requires the following dependencies to be installed:
   *   puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
   */
  static async getAnonymousCookie() {
    const puppeteer = await this.#getPuppeteer();
    const browser = await puppeteer.launch({ 
      headless: true,
      args: [
        '--disable-blink-features=AutomationControlled' // Removes the automated bot flag
      ]
    });

    const page = await browser.newPage();
    await page.setUserAgent({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    try {
      // Visit Bandcamp homepage
      await page.goto('https://bandcamp.com', { waitUntil: 'networkidle2' });

      // Handle cookie consent dialog if it appears
      await this.#handleCookieDialog(page);

      // Navigate to another page to ensure the cookie is set
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
      return cookieString;
    } finally {
      await browser.close();
    }
  }

  /**
   * Dynamically imports puppeteer and the stealth plugin. Returns null if import fails (e.g., not installed).
   * @returns 
   */
  static async #getPuppeteer() {
    let puppeteer;
    let puppeteerExtra;
    let stealth;
    try {
      puppeteerExtra = (await import('puppeteer-extra')).default;
    }
    catch (error) {
      puppeteerExtra = null;
    }
    if (puppeteerExtra) {
      try {
        stealth = (await import('puppeteer-extra-plugin-stealth')).default;
      }
      catch (error) {
        stealth = null;
      }
      if (stealth) {
        puppeteerExtra.use(stealth());
      }
      return puppeteerExtra;
    }
    try {
      puppeteer = (await import('puppeteer')).default;
    }
    catch (error) {
      puppeteer = null;
    }
    if (puppeteer) {
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
   */
  static async #handleCookieDialog(page: Page) {
    const dialogSelector = '.cookie-dialog-initial';
    const buttonSelector = '.cookie-dialog-initial .buttons button.g-button';
    try {
      const consentButton = await page.waitForSelector(
        buttonSelector,
        { visible: true, timeout: 5000 }
      );
      if (consentButton) {
        await consentButton.click()
        await page.waitForSelector(dialogSelector, { hidden: true, timeout: 5000 });
      }
    } catch (_) {
      return;
    }
  }
}