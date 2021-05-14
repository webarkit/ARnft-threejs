import { Entity } from "../entity/Entity";
import { ModelRendererComponent } from "../components/ModelRendererComponent";
export class CharacterEntity extends Entity {
    getModelRoot() {
        let _modelComponent = this.getComponent(ModelRendererComponent);
        return _modelComponent.root;
    }
    getModel() {
        let _modelComponent = this.getComponent(ModelRendererComponent);
        return _modelComponent.model;
    }
}
//# sourceMappingURL=CharacterEntity.js.map