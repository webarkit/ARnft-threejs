export class Utils {
  private static trackedMatrix: any = {
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
  //private static interpolationFactor: number = 24
  static interpolate (world: any) {
    const interpolationFactor = 24

    // interpolate matrix
    for (let i = 0; i < 16; i++) {
      this.trackedMatrix.delta[i] = world[i] - this.trackedMatrix.interpolated[i]
      this.trackedMatrix.interpolated[i] =
                  this.trackedMatrix.interpolated[i] +
                  this.trackedMatrix.delta[i] / interpolationFactor
     }
     return this.trackedMatrix.interpolated
   }

  static isMobile () {
    return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent)
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
