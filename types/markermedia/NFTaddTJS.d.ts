import { Object3D } from "three";
export default class NFTaddTJS {
    private entities;
    private names;
    private scene;
    private target;
    private uuid;
    private _filter;
    constructor(uuid: string);
    add(mesh: Object3D, name: string, objVisibility: boolean): void;
    addModel(url: string, name: string, x: number, y: number, z: number, scale: number, objVisibility: boolean): void;
    addImage(imageUrl: string, name: string, color: string, scale: number, objVisibility: boolean): void;
    addVideo(id: string, name: string, scale: number, objVisibility: boolean): void;
    getNames(): string[];
}
