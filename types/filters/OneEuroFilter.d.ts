import { Vector3 } from "three";
declare class LowPassFilter {
    y: number | null;
    s: number | null;
    alpha: number;
    constructor(alpha: number);
    setAlpha(alpha: number): void;
    filter(value: number, timestamp: number, alpha: number): number;
    lastValue(): number;
}
export default class OneEuroFilter {
    freq: number;
    minCutOff: number;
    beta: number;
    dCutOff: number;
    x: LowPassFilter;
    dx: LowPassFilter;
    lasttime: number | null;
    currValue: number;
    prevValue: number;
    constructor(freq: number, minCutOff?: number, beta?: number, dCutOff?: number);
    alpha(cutOff: number): number;
    UpdateParams(_freq: number, _mincutoff?: number, _beta?: number, _dcutoff?: number): void;
    Filter(x: number, timestamp?: number | null): number;
}
export declare class OneEuroFilterVector3 {
    private oneEuroFilters;
    private _freq;
    get freq(): number;
    private _beta;
    get beta(): number;
    private _dcutoff;
    get dcutoff(): number;
    private _mincutoff;
    get mincutoff_1(): number;
    private currValue;
    private prevValue;
    constructor(_freq: number, _mincutoff?: number, _beta?: number, _dcutoff?: number);
    UpdateParams(_freq: number, _mincutoff?: number, _beta?: number, _dcutoff?: number): void;
    Filter(_value: Vector3, timestamp?: number): Vector3;
}
export {};
