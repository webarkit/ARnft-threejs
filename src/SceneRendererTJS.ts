import * as THREE from 'three'
import { Utils } from './utils/Utils'

interface ConfigData {
  camera: {
    far: number;
    fov: number;
    matrixAutoUpdate: boolean;
    near: number;
    ratio: number;
  },
  renderer: {
    alpha: boolean;
    antialias: boolean;
    context: any;
    depth: boolean;
    logarithmicDepthBuffer: boolean;
    precision: string;
    stencil: boolean;
    premultipliedAlpha: boolean;
  };

}

interface Root extends THREE.Object3D {
  //matrix: object
}

interface Renderer {
  render: (scene: THREE.Scene, camera: THREE.Camera) => void;
  setPixelRatio: (pixelRatio: number) => void;
  setSize: (w: number, h: number) => void;
}

interface Camera extends THREE.Camera {
  matrixAutoUpdate: boolean;
}

interface Scene extends THREE.Scene {
  add: (node: THREE.Object3D) => this;
}

export class SceneRendererTJS {
  public canvas_draw: HTMLCanvasElement;
  private camera: Camera;
  public renderer: Renderer;
  private root: Root;
  private scene: Scene;

  constructor (configData: ConfigData, canvasDraw: HTMLCanvasElement, root: Root, cameraBool: boolean) {
    console.log('inside Scene constructor')
    console.log(configData);
    console.log(canvasDraw);
    this.root = root
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasDraw,
      context: configData.renderer.context,
      alpha: configData.renderer.alpha,
      premultipliedAlpha: configData.renderer.premultipliedAlpha,
      antialias: configData.renderer.antialias,
      stencil: configData.renderer.stencil,
      precision: configData.renderer.precision,
      depth: configData.renderer.depth,
      logarithmicDepthBuffer: configData.renderer.logarithmicDepthBuffer
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.scene = new THREE.Scene()
    if (cameraBool === true) {
      this.camera = new THREE.PerspectiveCamera( configData.camera.fov, configData.camera.ratio, configData.camera.near, configData.camera.far );
    } else {
      this.camera = new THREE.Camera()
    }
  }

  initRenderer () {
    this.camera.matrixAutoUpdate = false
    document.addEventListener('getProjectionMatrix', (ev: any) => {
        console.log("Proj matrix is:", ev.detail.proj)
      SceneRendererTJS.setMatrix(this.camera.projectionMatrix, ev.detail.proj)
    })
    this.scene.add(this.camera)

    const light = new THREE.AmbientLight(0xffffff)
    this.scene.add(light)

    document.addEventListener('getMatrixGL_RH', (ev: any) => {
      this.root.visible = true
      console.log("From Matrix GL: ", ev.detail.matrixGL_RH)
      const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
      Utils.setMatrix(this.root.matrix, matrix)
    })

    document.addEventListener('nftTrackingLost', (ev: any) => {
      this.root.visible = false
    })

    this.root.visible = false

    this.scene.add(this.root)
    document.addEventListener('getWindowSize', (_ev: any) => {
      this.renderer.setSize(_ev.detail.sw, _ev.detail.sh)
    })

    const setInitRendererEvent = new CustomEvent('onInitThreejsRendering', { detail: { renderer: this.renderer, scene: this.scene,  camera: this.camera } })
    document.dispatchEvent(setInitRendererEvent)
  }

  draw () {
    this.renderer.render(this.scene, this.camera)
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

  // tick to be implemented
  /* tick () {
    this.draw()
    window.requestAnimationFrame(this.tick)
  }*/
}
