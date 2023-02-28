import * as THREE from "three";
import { Utils } from "./utils/Utils";

interface ConfigData {
    camera: {
        far: number;
        fov: number;
        matrixAutoUpdate: boolean;
        near: number;
        ratio: number;
    };
    renderer: {
        alpha: boolean;
        antialias: boolean;
        context: any;
        depth: boolean;
        logarithmicDepthBuffer: boolean;
        precision: string;
        stencil: boolean;
        premultipliedAlpha: boolean;
        objVisibility: boolean;
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

export default class SceneRendererTJS {
    public canvas_draw: HTMLCanvasElement;
    private camera: Camera;
    private configData: ConfigData;
    public renderer: Renderer;
    private uuid: string;
    private root: Root;
    private target: EventTarget;
    private scene: Scene;
    private static globalScene: Scene;
    private version: string;

    constructor(configData: ConfigData, canvasDraw: HTMLCanvasElement, uuid: string, cameraBool: boolean) {
        this.configData = configData;
        this.uuid = uuid;
        this.target = window || global;
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasDraw,
            context: configData.renderer.context,
            alpha: configData.renderer.alpha,
            premultipliedAlpha: configData.renderer.premultipliedAlpha,
            antialias: configData.renderer.antialias,
            stencil: configData.renderer.stencil,
            precision: configData.renderer.precision,
            depth: configData.renderer.depth,
            logarithmicDepthBuffer: configData.renderer.logarithmicDepthBuffer,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.scene = new THREE.Scene();
        SceneRendererTJS.globalScene = this.scene;
        if (cameraBool === true) {
            this.camera = new THREE.PerspectiveCamera(
                configData.camera.fov,
                configData.camera.ratio,
                configData.camera.near,
                configData.camera.far
            );
        } else {
            this.camera = new THREE.Camera();
        }
        this.version = "0.4.7";
        console.log("ARnftThreejs version: ", this.version);
    }

    initRenderer() {
        this.camera.matrixAutoUpdate = false;
        this.target.addEventListener("getProjectionMatrix", (ev: any) => {
            Utils.setMatrix(this.camera.projectionMatrix, ev.detail.proj);
        });
        this.scene.add(this.camera);

        const light = new THREE.AmbientLight(0xffffff);
        this.scene.add(light);

        this.target.addEventListener("getWindowSize", (_ev: any) => {
            this.renderer.setSize(_ev.detail.sw, _ev.detail.sh);
        });

        const setInitRendererEvent = new CustomEvent("onInitThreejsRendering", {
            detail: {
                renderer: this.renderer,
                scene: this.scene,
                camera: this.camera,
            },
        });
        this.target.dispatchEvent(setInitRendererEvent);
    }

    draw() {
        this.renderer.render(this.scene, this.camera);
    }

    // getters

    getRenderer(): Renderer {
        return this.renderer;
    }

    getScene(): Scene {
        return this.scene;
    }

    getCamera(): Camera {
        return this.camera;
    }

    static getGlobalScene(): Scene {
        return SceneRendererTJS.globalScene;
    }

    // setters

    setRenderer(renderer: Renderer) {
        this.renderer = renderer;
    }

    setScene(scene: Scene) {
        this.scene = scene;
    }

    setCamera(camera: Camera) {
        this.camera = camera;
    }

    // tick to be implemented
    /* tick () {
    this.draw()
    window.requestAnimationFrame(this.tick)
  }*/
}
