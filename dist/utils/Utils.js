export class Utils {
    constructor() {
    }
    static interpolate(world) {
        for (let i = 0; i < 16; i++) {
            this.trackedMatrix.delta[i] = world[i] - this.trackedMatrix.interpolated[i];
            this.trackedMatrix.interpolated[i] =
                this.trackedMatrix.interpolated[i] +
                    this.trackedMatrix.delta[i] / this.interpolationFactor;
        }
        return this.trackedMatrix.interpolated;
    }
    static isMobile() {
        return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent);
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
Utils.trackedMatrix = {
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
Utils.interpolationFactor = 24;
//# sourceMappingURL=Utils.js.map