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
export declare class ThreejsRenderer {
    canvas_draw: HTMLCanvasElement;
    private camera;
    renderer: Renderer;
    private root;
    private scene;
    constructor(configData: ConfigData, canvasDraw: HTMLCanvasElement, root: Root, camera: Camera);
    private extractor;
    initRenderer(): void;
    draw(): void;
}
export {};
