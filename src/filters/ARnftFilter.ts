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

    public update(world: any): Vector3 {
        if (!world) {
            this._hasFound = false;
            this._frameDrops = 0;
        } else {
            console.log('inside loop');
            
            //let worldMatrix: Matrix = Matrix.FromArray(this.getArrayMatrix(this.world));
            let matrixW: Matrix4 = new Matrix4();
            let worldMatrix: Matrix4 = matrixW.fromArray(this.getArrayMatrix(world));


            if (!this._hasFound) {
                // for (var i = 0; i < 16; i++) {
                //     this.trackedMatrix.interpolated[i] = this.world[i];
                // }
                this._hasFound = true;
                let vecTrans: Vector3 = new Vector3()
                ///this._lastTranslation = worldMatrix.getTranslation(); // Babylon code...
                this._lastTranslation = vecTrans.setFromMatrixPosition(worldMatrix)
            }
            else {
                let vecTrans: Vector3 = new Vector3()
                //let _currentTranslation: Vector3 = worldMatrix.getTranslation(); // Babylon code...
                let _currentTranslation: Vector3 = vecTrans.setFromMatrixPosition(worldMatrix)

                //if (Math.abs(Vector3.Distance(_currentTranslation, this._lastTranslation)) > this._deltaAccuracy) { //Babylon code...
                if (Math.abs(_currentTranslation.distanceTo(this._lastTranslation)) > this._deltaAccuracy) {
                    this._frameDrops += 1;
                    if (this._frameDrops > 3) {
                        this._lastTranslation = _currentTranslation;
                    }
                    return;
                }
                this._frameDrops = 0;
                this._lastTranslation = _currentTranslation;
                // for (var i = 0; i < 16; i++) {
                //     this.trackedMatrix.delta[i] = this.world[i] - this.trackedMatrix.interpolated[i];
                //     this.trackedMatrix.interpolated[i] = this.trackedMatrix.interpolated[i] + (this.trackedMatrix.delta[i] / this._interpolationFactor);
                // }
            }
            // let matrix: Matrix = Matrix.FromArray(this.getArrayMatrix(this.world));

            this._positionFilter.UpdateParams(this.filterFrequency, this.filterMinCutoff, this.filterBeta, this.filterDcutoff);
            this._rotationFilter.UpdateParams(this.filterFrequency * 2, this.filterMinCutoff, this.filterBeta, this.filterDcutoff);

            //let matrix: Matrix = worldMatrix;  //Babylon code...
            let matrix: Matrix4 = worldMatrix;


            //let rotMatrix: Matrix = matrix.getRotationMatrix();
            let rotMatrix: Matrix4 = new Matrix4();
            rotMatrix.extractRotation(matrix);
            //let rotation: Quaternion = new Quaternion().setFromRotationMatrix(rotMatrix); //this is wrong , will do nothing!
            let rotation: Quaternion = new Quaternion()
            ///this._root.rotation = this._rotationFilter.Filter(rotation.toEulerAngles()); // Babylon code
            let rotationVec: Vector3 = new Vector3();
            let eulerRot: Euler = new Euler();
            //eulerRot.setFromQuaternion(rotation)
            //rotationVec = this._rotationFilter.Filter(rotation.toEulerAngles()); // Babylon code
            //rotationVec = this._rotationFilter.Filter(eulerRot.toVector3());

            // or even simple decompose the worldMatrix into position, quaternion and scale with decompose
            let position: Vector3 = new Vector3();
            let scale: Vector3 = new Vector3();
            worldMatrix.decompose(position, rotation, scale)
            let eRot = eulerRot.setFromQuaternion(rotation)
            rotationVec = this._rotationFilter.Filter(eRot.toVector3());

            //let pos = Vector3.TransformCoordinates(new Vector3(0, 0, 0), matrix);

            //this._root.setAbsolutePosition(this._positionFilter.Filter(position));
            let pos = this._positionFilter.Filter(position)
            /*let out: Matrix4 = new Matrix4();
            let rotationMatrix = new Matrix4();
            //rotationMatrix.makeRotationFromQuaternion()
            let finalRot = new Quaternion();
            finalRot.setFromRotationMatrix(rotationMatrix)*/
            //out.compose(pos, ) /// will see if output the matrix in a future...
            return pos
        }
    }
    protected getArrayMatrix(value: any): any {
        var array: any = [];
        for (var key in value) {
            array[key] = value[key]; //.toFixed(4);
        }
        return array;
    }
}