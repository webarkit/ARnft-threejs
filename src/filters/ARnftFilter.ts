import { OneEuroFilterVector3 } from "./OneEuroFilter";
import { DelayableSignalFilter } from "./DelayableSignalFilter";
import { Euler, Matrix4, Quaternion, Vector3 } from "three";

export class ARnftFilter {
    private delayExitCheck: DelayableSignalFilter;

    private delayEnterCheck: DelayableSignalFilter;

    private _hasFound: boolean = false;

    // private _interpolationFactor: number = 15;

    private _lastTranslation: Vector3;

    private _frameDrops: number = 0;

    private _deltaAccuracy: number = 10;

    private _positionFilter: OneEuroFilterVector3;

    private _rotationFilter: OneEuroFilterVector3;

    public filterFrequency: number = 30.0;
    public filterMinCutoff: number = 1.0;
    public filterBeta: number = 0.0;
    public filterDcutoff: number = 1.0;

    constructor() {
        this.delayEnterCheck = new DelayableSignalFilter(2);
        this.delayExitCheck = new DelayableSignalFilter(0);

        this._positionFilter = new OneEuroFilterVector3(this.filterFrequency);
        this._rotationFilter = new OneEuroFilterVector3(this.filterFrequency * 2);
    }

    public update(world: any): Vector3[] {
        let pos: Vector3 = new Vector3();
        let rotationVec: Vector3 = new Vector3();
        let scale: Vector3 = new Vector3();
        if (!world) {
            this._hasFound = false;
            this._frameDrops = 0;
        } else {
            let matrixW: Matrix4 = new Matrix4();
            let worldMatrix: Matrix4 = matrixW.fromArray(this.getArrayMatrix(world));
            if (!this._hasFound) {
                this._hasFound = true;
                let vecTrans: Vector3 = new Vector3();
                this._lastTranslation = vecTrans.setFromMatrixPosition(worldMatrix);
            } else {
                let vecTrans: Vector3 = new Vector3();
                let _currentTranslation: Vector3 = vecTrans.setFromMatrixPosition(worldMatrix);
                if (Math.abs(_currentTranslation.distanceTo(this._lastTranslation)) > this._deltaAccuracy) {
                    this._frameDrops += 1;
                    if (this._frameDrops > 3) {
                        this._lastTranslation = _currentTranslation;
                    }
                    return [pos, rotationVec, scale];
                }
                this._frameDrops = 0;
                this._lastTranslation = _currentTranslation;
            }
            this._positionFilter.UpdateParams(
                this.filterFrequency,
                this.filterMinCutoff,
                this.filterBeta,
                this.filterDcutoff
            );
            this._rotationFilter.UpdateParams(
                this.filterFrequency * 2,
                this.filterMinCutoff,
                this.filterBeta,
                this.filterDcutoff
            );
            let matrix: Matrix4 = new Matrix4();

            matrix = worldMatrix;

            let rotation: Quaternion = new Quaternion();
            let eulerRot: Euler = new Euler();
            let position: Vector3 = new Vector3(0, 0, 0);

            // or even simple decompose the worldMatrix into position, quaternion and scale with decompose
            worldMatrix.decompose(position, rotation, scale);
            let eRot = eulerRot.setFromQuaternion(rotation);
            rotationVec = this._rotationFilter.Filter(eRot.toVector3());

            pos = this._positionFilter.Filter(position);
        }
        return [pos, rotationVec, scale];
    }
    protected getArrayMatrix(value: any): any {
        var array: any = [];
        for (var key in value) {
            array[key] = value[key]; //.toFixed(4);
        }
        return array;
    }
}
