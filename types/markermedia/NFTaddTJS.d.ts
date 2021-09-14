import { Object3D } from 'three';
export default class NFTaddTJS {
    private entities;
    private names;
    private scene;
    private uuid;
    constructor(uuid: string);
    add(mesh: Object3D, name: string): void;
    addModel(url: string, x: number, y: number, z: number, scale: number): void;
    addImage(imageUrl: string, color: string, scale: number): void;
    addVideo(id: string, scale: number): void;
}
