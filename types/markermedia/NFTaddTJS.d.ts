import { Object3D } from 'three';
export default class NFTaddTJS {
    private root;
    constructor(root: Object3D);
    add(mesh: Object3D): void;
    addModel(url: string, x: number, y: number, z: number, scale: number): void;
    addImage(imageUrl: string, color: string, scale: number): void;
    addVideo(id: string, scale: number): void;
}
