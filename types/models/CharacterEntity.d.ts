import { Object3D } from "three";
import { Entity } from "../entity/Entity";
export declare class CharacterEntity extends Entity {
    getModelRoot(): Object3D;
    getModel(): Object3D;
}
