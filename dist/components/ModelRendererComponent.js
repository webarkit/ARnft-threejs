import { EntityComponent } from "../entity/EntityComponent";
import { Object3D } from "three";
import { degreesToRadians } from "../framework/utils/Utils";
export class ModelRendererComponent extends EntityComponent {
    constructor(model, d) {
        super(ModelRendererComponent.NAME);
        this.data = d;
        this._root = new Object3D();
        this._root.name = "model-root";
        this.model = model;
        let scale = this.data.scale;
        this.root.scale.set(scale, scale, scale);
        let offset = this.data.offset;
        this.root.position.set(offset.x, offset.y, 0);
        this.model.rotateX(degreesToRadians(-90));
        this.model.parent = this._root;
    }
    get root() {
        return this._root;
    }
    handleModelEnabled(event) {
        this.enabled = event.data;
    }
    set enabled(value) {
        super.enabled = value;
    }
}
ModelRendererComponent.NAME = "ModelRendererComponent";
ModelRendererComponent.MODEL_ENABLED_EVENT = "ModelRendererEvent:ModelEnabledEvent";
//# sourceMappingURL=ModelRendererComponent.js.map