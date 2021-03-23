export declare class NFTOrientation {
    position: IterableIterator<number>;
    rotation: IterableIterator<number>;
    matrix: IterableIterator<number>;
}
export interface IMediaNode {
    update(): void;
    found(value: NFTOrientation): void;
}
