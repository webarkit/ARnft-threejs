import * as THREE from 'three';
import { Utils } from './utils/Utils';
export class SceneRendererTJS {
    constructor(configData, canvasDraw, root, uuid, cameraBool) {
        this.configData = configData;
        this.uuid = uuid;
        this.root = root;
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
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.scene = new THREE.Scene();
        if (cameraBool === true) {
            this.camera = new THREE.PerspectiveCamera(configData.camera.fov, configData.camera.ratio, configData.camera.near, configData.camera.far);
        }
        else {
            this.camera = new THREE.Camera();
        }
        this.version = '0.1.0';
        console.log("ARnftThreejs version: ", this.version);
    }
    initRenderer() {
        this.camera.matrixAutoUpdate = false;
        document.addEventListener('getProjectionMatrix', (ev) => {
            Utils.setMatrix(this.camera.projectionMatrix, ev.detail.proj);
        });
        this.scene.add(this.camera);
        const light = new THREE.AmbientLight(0xffffff);
        this.scene.add(light);
        document.addEventListener('getMatrixGL_RH-' + this.uuid, (ev) => {
            this.root.visible = true;
            const matrix = Utils.interpolate(ev.detail.matrixGL_RH);
            Utils.setMatrix(this.root.matrix, matrix);
        });
        document.addEventListener('nftTrackingLost', (ev) => {
            this.root.visible = this.configData.renderer.objVisibility;
        });
        this.root.visible = false;
        this.scene.add(this.root);
        document.addEventListener('getWindowSize', (_ev) => {
            this.renderer.setSize(_ev.detail.sw, _ev.detail.sh);
        });
        const setInitRendererEvent = new CustomEvent('onInitThreejsRendering', { detail: { renderer: this.renderer, scene: this.scene, camera: this.camera } });
        document.dispatchEvent(setInitRendererEvent);
    }
    draw() {
        this.renderer.render(this.scene, this.camera);
    }
    getRenderer() {
        return this.renderer;
    }
    getScene() {
        return this.scene;
    }
    getCamera() {
        return this.camera;
    }
    setRenderer(renderer) {
        this.renderer = renderer;
    }
    setScene(scene) {
        this.scene = scene;
    }
    setCamera(camera) {
        this.camera = camera;
    }
}
//# sourceMappingURL=SceneRendererTJS.js.map
