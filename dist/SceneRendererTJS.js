import * as THREE from 'three';
export class SceneRendererTJS {
    constructor(configData, canvasDraw, root, camera) {
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
        if (this.extractor(camera)) {
            this.camera = new THREE.PerspectiveCamera(configData.camera.fov, configData.camera.ratio, configData.camera.near, configData.camera.far);
        }
        else {
            this.camera = new THREE.Camera();
        }
    }
    extractor(camera) {
        return camera;
    }
    initRenderer() {
        this.camera.matrixAutoUpdate = false;
        document.addEventListener('getProjectionMatrix', (ev) => {
            SceneRendererTJS.setMatrix(this.camera.projectionMatrix, ev.detail.proj);
        });
        this.scene.add(this.camera);
        const light = new THREE.AmbientLight(0xffffff);
        this.scene.add(light);
        document.addEventListener('getMatrixGL_RH', (ev) => {
            this.root.visible = true;
        });
        document.addEventListener('nftTrackingLost', (ev) => {
            this.root.visible = false;
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
//# sourceMappingURL=SceneRendererTJS.js.map