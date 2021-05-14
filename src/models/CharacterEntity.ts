import { Object3D } from "three";
import { Entity } from "../entity/Entity";
import { ModelRendererComponent } from "../components/ModelRendererComponent";

export class CharacterEntity extends Entity {

    public getModelRoot(): Object3D {
        let _modelComponent: ModelRendererComponent = this.getComponent(ModelRendererComponent) as ModelRendererComponent;
        return _modelComponent.root;
    }

    public getModel(): Object3D {
        let _modelComponent: ModelRendererComponent = this.getComponent(ModelRendererComponent) as ModelRendererComponent;
        return _modelComponent.model;
    }
}
