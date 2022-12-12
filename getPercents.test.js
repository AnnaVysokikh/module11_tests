import { getPercents } from "./getPercents";

xdescribe('getPercents test', () => {
    const goodPercent = 30;
    const badPercent = -50;
    const zeroPercent = 0;

    it ("getPercents goodPercent from 200", () => {
        expect(getPercents(goodPercent, 200)).toBe(60);
    }),
    it ("getPercents zeroPercent from 200", () => {
        expect(getPercents(zeroPercent, 250)).toBe(0);
    }),
    it ("getPercents badPercent from 200", () => {
        expect(getPercents(badPercent, 200)).toBe("некорректные входные данные");
    });
});

describe('getPercents test', () => {
    const goodPercent = 30;
    const badPercent = -50;
    const zeroPercent = 0;

    it ("getPercents from 200", () => {
        expect(getPercents(goodPercent, 200)).toBe(60);
        expect(getPercents(zeroPercent, 250)).toBe(0);
        expect(getPercents(badPercent, 200)).toBe("некорректные входные данные");
    });
});