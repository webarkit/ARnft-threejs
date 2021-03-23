import { NFTNodeTJS } from "../NFTRootTJS";
import { Object3D } from 'three';
export declare class NFTImageTJS extends NFTNodeTJS {
    private imageRoot;
    constructor(root: Object3D);
    addNFTImage(imageUrl: string, width: number, height: number): void;
}
