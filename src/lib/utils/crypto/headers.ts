import crypto from "crypto";
import { charToInt, lastCharToInt, toBase36 } from "../Strings.js";
import { hmacSha1, hmacSha256 } from "./common.js";
import Sha1Kdf from "./Sha1Kdf.js";
import Sha256KdfV1 from "./Sha256KdfV1.js";
import Sha256KdfV2 from "./Sha256KdfV2.js";

const AlgorithmHmacSha256 = 3;
const AlgorithmHmacSha512 = 4;

export function calculateDm(dm: string, requestBody: string): string {
	let algorithm = 0;

	if (dm) {
		const index = lastCharToInt(dm);
		algorithm = charToInt(dm, index);
	}

	if (algorithm === AlgorithmHmacSha256) {
		const key = Sha256KdfV1.deriveKey(dm);
		const prefix = Sha256KdfV2.deriveKey(dm);
		return hmacSha256(key, prefix + requestBody);
	}

	if (algorithm === AlgorithmHmacSha512) {
		throw new Error("HMAC SHA-512 KDF is currently not supported.");
	}

	return hmacSha1("dtmfa", Sha1Kdf.deriveKey(algorithm, dm) + requestBody);
}

export function calculatePow(pow: string, requestBody: string): string {
	const parts = pow.split(":");
	const data = requestBody + parts[2];
	const leadingZeroBits = parseInt(parts[1], 10);
	const nonce = calculateNonce(data, leadingZeroBits);
	return `${parts[0]}:${parts[1]}:${parts[2]}:${nonce}`;
}

function calculateNonce(data: string, leadingZeroBits: number): string {
	let nonce = 0;
	while (true) {
		const result = toBase36(nonce++);
		const digest = crypto
			.createHash("sha1")
			.update(data + result)
			.digest();

		let total = 0;
		for (const byte of digest) {
			const count = Math.clz32(byte) - 24;
			total += count;
			if (count < 8) break;
		}

		if (total >= leadingZeroBits) return result;
	}
}
