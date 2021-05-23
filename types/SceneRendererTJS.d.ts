import * as THREE from 'three';
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
    canvas_draw: HTMLCanvasElement;
    private camera;
    private configData;
    renderer: Renderer;
    private uuid;
    private root;
    private scene;
    private version;
    constructor(configData: ConfigData, canvasDraw: HTMLCanvasElement, root: Root, uuid: string, cameraBool: boolean);
    initRenderer(): void;
    draw(): void;
    getRenderer(): Renderer;
    getScene(): Scene;
    getCamera(): Camera;
    setRenderer(renderer: Renderer): void;
    setScene(scene: Scene): void;
    setCamera(camera: Camera): void;
}
export {};
