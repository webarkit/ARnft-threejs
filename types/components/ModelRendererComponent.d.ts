import { EntityComponent } from "../entity/EntityComponent";
import { CharacterData } from "../models/AppData";
import { Object3D } from "three";
import { DataEvent } from "../controllers/DataEvent";
export declare class ModelRendererComponent extends EntityComponent {
    static NAME: string;
    static MODEL_ENABLED_EVENT: string;
    model: Object3D;
    private _root;
    get root(): Object3D;
    private data;
    constructor(model: Object3D, d: CharacterData);
    handleModelEnabled(event: DataEvent): void;
    set enabled(value: boolean);
}
export interface IModelRendererComponent {
}
