import { IMediaNode } from '../media-node/IMediaNode';
export declare class ARControllerComponent implements IMediaNode {
    protected world: any;
    private _hasFound;
    private _frameDrops;
    constructor();
    update(): void;
    found(msg: any): void;
}
