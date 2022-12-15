import { Object3D } from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
interface IPlaneConfig {
    w: number;
    h: number;
    ws: number;
    hs: number;
}
export default class NFTaddTJS {
    private entities;
    private names;
    private scene;
    private target;
    private uuid;
    private fontLoader;
    private _filter;
    private _oef;
    constructor(uuid: string);
    add(mesh: Object3D, name: string, objVisibility: boolean): void;
    addModel(url: string, name: string, scale: number, objVisibility: boolean): void;
    addModelWithCallback(url: string, name: string, callback: (gltf: any) => {}, objVisibility: boolean): void;
    addImage(imageUrl: string, name: string, color: string, scale: number, configs: IPlaneConfig, objVisibility: boolean): void;
    addVideo(id: string, name: string, scale: number, configs: IPlaneConfig, objVisibility: boolean): void;
    getNames(): string[];
    getFontLoader(): FontLoader;
    set oef(enable: boolean);
    get oef(): boolean;
}
export {};
