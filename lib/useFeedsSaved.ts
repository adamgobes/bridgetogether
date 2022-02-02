export type FeesSaved = {
    address: string;
    saved: number;
}

const genRanHex = (size: number = 40) =>
    '0x' +
    [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');

const randomNumber = (upperBound: number) =>
    Math.floor(Math.random() * (upperBound + 1));

export function useFeedsSaved(): FeesSaved[] {
    return [...Array(7)]
        .map(e => ({
            address: genRanHex(),
            saved: randomNumber(300)
        }))
}