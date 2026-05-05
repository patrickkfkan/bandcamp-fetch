import { lastCharToInt, reverseString } from "../Strings.js";
import { hmacSha256 } from "./common.js";

const KEY_V1 =
	"1YlODulAdUFx6qKC3PzI5QP9gGuhPdIG" +
	"xCQJz25vTiwiDRbhZRdmz89NGmNOy5FM" +
	"vqcGAbRi3vrBD6vbwQriX2PSs9iRfWpc" +
	"G4kn9mlPbwQRjWVAtiwb5PMKNTcuuY92";

export default {
	deriveKey(dm: string): string {
		let key = KEY_V1;
		const iterations = (lastCharToInt(dm) * 3) % 4;

		for (let i = 0; i < iterations; i++) {
			const mid = Math.floor(key.length / 2);
			const s1 = reverseString(key.substring(0, mid));
			const s2 = reverseString(key.substring(mid)).toUpperCase();
			key = hmacSha256(key, s1 + s2);
		}

		return key;
	},
};
