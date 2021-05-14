import { EntityComponent } from "../entity/EntityComponent";
import { CharacterData, Vector2Data } from "../models/AppData";
import { Object3D } from "three";
import { degreesToRadians } from "../framework/utils/Utils";
import { DataEvent } from "../controllers/DataEvent";

export class ModelRendererComponent extends EntityComponent {

    static NAME: string = "ModelRendererComponent";

    static MODEL_ENABLED_EVENT : string = "ModelRendererEvent:ModelEnabledEvent";

    public model: Object3D;

    private _root: Object3D;

    public get root(): Object3D {
        return this._root;
    }

    private data: CharacterData;

    constructor(model: Object3D, d: CharacterData) {
        super(ModelRendererComponent.NAME);

        this.data = d;

        
        this._root = new Object3D();
        this._root.name = "model-root";

        this.model = model;
        let scale: number = this.data.scale;
        this.root.scale.set(scale, scale, scale);

        let offset : Vector2Data = this.data.offset;
        this.root.position.set(offset.x, offset.y, 0);

        this.model.rotateX( degreesToRadians(-90));
        this.model.parent = this._root;
    }

    /*public onAdd(): void{
        this.owner.dispatcher.addEventListener(ModelRendererComponent.MODEL_ENABLED_EVENT, this.handleModelEnabled.bind(this));
    }*/

    public handleModelEnabled( event:DataEvent):void{
        this.enabled = event.data;
    }

    public set enabled(value: boolean) {
        super.enabled = value;
        //this.root.setEnabled(value);
    }

}

export interface IModelRendererComponent {

}