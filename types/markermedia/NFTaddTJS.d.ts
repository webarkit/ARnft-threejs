import { Object3D, Scene } from 'three';
export default class NFTaddTJS {
    private root;
    private entities;
    private names;
    private uuid;
    constructor(root: Object3D, scene: Scene, uuid: string);
    add(mesh: Object3D, name: string): void;
    addModel(url: string, x: number, y: number, z: number, scale: number): void;
    addImage(imageUrl: string, color: string, scale: number): void;
    addVideo(id: string, scale: number): void;
}
