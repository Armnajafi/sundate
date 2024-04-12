declare class Sundate {
    private date;
    constructor(date_ms?: number | undefined);
    gregorian_to_shamsi(gy: number, gm: number, gd: number): number[];
    shamsi_to_gregorian(jy: number, jm: number, jd: number): number[];
    now(shamsi?: boolean): number[];
    show(shamsi?: boolean): number[];
}
export = Sundate;
