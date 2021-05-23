import { PlaneGeometry, TextureLoader, VideoTexture, Mesh, MeshStandardMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default class NFTaddTJS {
    constructor(root) {
        this.root = root;
    }
    add(mesh) {
        document.addEventListener('getNFTData', (ev) => {
            var msg = ev.detail;
            mesh.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0;
            mesh.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0;
        });
        this.root.add(mesh);
    }
    addModel(url, x, y, z, scale) {
        let model;
        const threeGLTFLoader = new GLTFLoader();
        threeGLTFLoader.load(url, gltf => {
            model = gltf.scene;
            model.scale.set(scale, scale, scale);
            model.rotation.x = Math.PI / 2;
            model.position.x = x;
            model.position.y = y;
            model.position.z = z;
            this.root.add(model);
        });
    }
    addImage(imageUrl, color, scale) {
        const planeGeom = new PlaneGeometry(1, 1, 1, 1);
        const texture = new TextureLoader().load(imageUrl);
        const material = new MeshStandardMaterial({ color: color, map: texture });
        const plane = new Mesh(planeGeom, material);
        plane.scale.set(scale, scale, scale);
        document.addEventListener('getNFTData', (ev) => {
            var msg = ev.detail;
            plane.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0;
            plane.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0;
        });
        this.root.add(plane);
    }
    addVideo(id, scale) {
        const root = this.root;
        const ARVideo = document.getElementById(id);
        const texture = new VideoTexture(ARVideo);
        const mat = new MeshStandardMaterial({ color: 0xbbbbff, map: texture });
        ARVideo.play();
        const planeGeom = new PlaneGeometry(1, 1, 1, 1);
        const plane = new Mesh(planeGeom, mat);
        plane.scale.set(scale, scale, scale);
        document.addEventListener('getNFTData', (ev) => {
            var msg = ev.detail;
            plane.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0;
            plane.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0;
        });
        this.root.add(plane);
    }
}
//# sourceMappingURL=NFTaddTJS.js.map