export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function lastCharToInt(str: string): number {
    const lastChar = str[str.length - 1];
    return parseInt(lastChar, 10) || 0;
}

export function charToInt(str: string, index: number): number {
    const char = str[index];
    return parseInt(char, 10) || 0;
}

export function toBase36(num: number): string {
    return num.toString(36);
}