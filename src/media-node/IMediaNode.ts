export class NFTOrientation {
    // euler vector3
    public position: IterableIterator<number>;
    // qauaterion
    public rotation: IterableIterator<number>;

    public matrix: IterableIterator<number>;
}

export interface IMediaNode {
    update(): void;
    found(value: NFTOrientation): void;
}
