import { Vector3 } from "three";
export declare class ARnftFilter {
    private delayExitCheck;
    private delayEnterCheck;
    private _hasFound;
    private _lastTranslation;
    private _frameDrops;
    private _deltaAccuracy;
    private _positionFilter;
    private _rotationFilter;
    filterFrequency: number;
    filterMinCutoff: number;
    filterBeta: number;
    filterDcutoff: number;
    constructor();
    update(world: any): Vector3[];
    protected getArrayMatrix(value: any): any;
}
