import { IMediaNode } from "./media-node/IMediaNode";
export declare abstract class NFTNodeTJS implements IMediaNode {
    protected world: any;
    protected translation: any;
    protected rotation: any;
    protected scale: any;
    private _hasFound;
    private _interpolationFactor;
    private _lastTranslation;
    private _frameDrops;
    private _root;
    private _deltaAccuracy;
    get deltaAccuracy(): number;
    set deltaAccuracy(value: number);
    get interpolationFactor(): number;
    set interpolationFactor(value: number);
    private trackedMatrix;
    found(world: any): void;
    update(): void;
    protected getArrayMatrix(value: any): any;
    static setMatrix(matrix: any, value: any): void;
}
