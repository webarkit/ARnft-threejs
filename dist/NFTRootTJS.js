import { Euler, Matrix4, Quaternion, Vector3 } from 'three';
export class NFTNodeTJS {
    constructor() {
        this._hasFound = false;
        this._interpolationFactor = 15;
        this._frameDrops = 0;
        this._deltaAccuracy = 10;
        this.trackedMatrix = {
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
        };
    }
    get deltaAccuracy() {
        return this._deltaAccuracy;
    }
    set deltaAccuracy(value) {
        this._deltaAccuracy = value;
    }
    get interpolationFactor() {
        return this._interpolationFactor;
    }
    set interpolationFactor(value) {
        this._interpolationFactor = value;
    }
    found(world) {
        this.world = world;
    }
    update() {
        if (!this.world) {
            this._hasFound = false;
            this._frameDrops = 0;
            this._root.visible = false;
        }
        else {
            let worldMatrix = new Matrix4().fromArray(this.getArrayMatrix(this.world));
            worldMatrix.decompose(this.translation, this.rotation, this.scale);
            if (!this._hasFound) {
                this._root.visible = true;
                for (var i = 0; i < 16; i++) {
                    this.trackedMatrix.interpolated[i] = this.world[i];
                }
                this._hasFound = true;
                this._lastTranslation = new Vector3().setFromMatrixPosition(worldMatrix);
            }
            else {
                let _currentTranslation = new Vector3().setFromMatrixPosition(worldMatrix);
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
            let matrix = new Matrix4().fromArray(this.getArrayMatrix(this.trackedMatrix.interpolated));
            let rotMatrix = new Matrix4();
            rotMatrix.extractRotation(matrix);
            let rotationQ = new Quaternion().setFromRotationMatrix(rotMatrix);
            let EulerFromQ = new Euler().setFromQuaternion(rotationQ);
            this._root.setRotationFromEuler(EulerFromQ);
            this._root.position.set(this.translation.x, this.translation.y, this.translation.z);
        }
    }
    getArrayMatrix(value) {
        var array = [];
        for (var key in value) {
            array[key] = value[key];
        }
        return array;
    }
    static setMatrix(matrix, value) {
        const array = [];
        for (const key in value) {
            array[key] = value[key];
        }
        if (typeof matrix.elements.set === 'function') {
            matrix.elements.set(array);
        }
        else {
            matrix.elements = [].slice.call(array);
        }
    }
    ;
}
//# sourceMappingURL=NFTRootTJS.js.map