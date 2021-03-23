import { Euler, Object3D, Matrix4, Quaternion, Vector3 } from 'three';
import { IMediaNode } from "./media-node/IMediaNode";

export abstract class NFTNodeTJS implements IMediaNode  {

    protected world: any;

    protected translation: any;
    protected rotation: any;
    protected scale: any;

    private _hasFound: boolean = false;

    private _interpolationFactor: number = 15;

    private _lastTranslation: Vector3;

    private _frameDrops: number = 0;

    private _root: Object3D;

    private _deltaAccuracy: number = 10;

    /*public get root(): Object3D {
        return this._root;
    }

    public set root(value: Object3D) {} {
        this._root = new value;
    }*/

    public get deltaAccuracy(): number {
        return this._deltaAccuracy;
    }

    public set deltaAccuracy(value: number) {
        this._deltaAccuracy = value;
    }

    public get interpolationFactor(): number {
        return this._interpolationFactor;
    }

    public set interpolationFactor(value: number) {
        this._interpolationFactor = value;
    }

    private trackedMatrix: any = {
        // for interpolation
        delta: [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0
        ],
        interpolated: [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0
        ]
    }

    public found(world:any){
        this.world = world;
    }

    public update(): void {
        if (!this.world) {
            this._hasFound = false;
            this._frameDrops = 0;

            this._root.visible = false;
        } else {
            let worldMatrix: Matrix4 = new Matrix4().fromArray(this.getArrayMatrix(this.world));
            worldMatrix.decompose(this.translation, this.rotation, this.scale)
            //let worldMatrix: Matrix = Matrix.FromArray(this.getArrayMatrix(this.world));

            if (!this._hasFound) {
                this._root.visible = true;
                for (var i = 0; i < 16; i++) {
                    this.trackedMatrix.interpolated[i] = this.world[i];
                }
                this._hasFound = true;
                this._lastTranslation = new Vector3().setFromMatrixPosition(worldMatrix);
            }
            else {
                //let _currentTranslation: Vector3 = worldMatrix.getTranslation();
                let _currentTranslation: Vector3 = new Vector3().setFromMatrixPosition(worldMatrix);

                //if (Math.abs(Vector3.Distance(_currentTranslation, this._lastTranslation)) > this._deltaAccuracy) {
                if (Math.abs(_currentTranslation.distanceTo(this._lastTranslation)) > this._deltaAccuracy) {
                    this._frameDrops += 1;
                    if (this._frameDrops > 3) {
                        this._lastTranslation = _currentTranslation;
                    }
                    return;
                }
                this._frameDrops = 0;
                this._lastTranslation = _currentTranslation;
                for (var i = 0; i < 16; i++) {
                    this.trackedMatrix.delta[i] = this.world[i] - this.trackedMatrix.interpolated[i];
                    this.trackedMatrix.interpolated[i] = this.trackedMatrix.interpolated[i] + (this.trackedMatrix.delta[i] / this._interpolationFactor);
                }
            }
            let matrix: Matrix4 = new Matrix4().fromArray(this.getArrayMatrix(this.trackedMatrix.interpolated));

            let rotMatrix: Matrix4 = new Matrix4()
            rotMatrix.extractRotation(matrix);
            let rotationQ: Quaternion = new Quaternion().setFromRotationMatrix(rotMatrix);
            let EulerFromQ = new Euler().setFromQuaternion(rotationQ)//toEulerAngles
            this._root.setRotationFromEuler(EulerFromQ)// = new Euler().setFromQuaternion(rotation)//toEulerAngles(

            //let pos = Vector3.TransformCoordinates(new Vector3(0, 0, 0), matrix);
            //this._root.setAbsolutePosition(pos);
            this._root.position.set(this.translation.x, this.translation.y, this.translation.z);// = this.translation;
        }
    }

    protected getArrayMatrix(value: any): any {
        var array: any = [];
        for (var key in value) {
            array[key] = value[key]; //.toFixed(4);
        }
        return array;
    }

    static setMatrix (matrix: any, value: any) {
      const array: any = []
      for (const key in value) {
        array[key] = value[key]
      }
      if (typeof matrix.elements.set === 'function') {
        matrix.elements.set(array)
      } else {
        matrix.elements = [].slice.call(array)
      }
    };
}
