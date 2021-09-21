import { Object3D,
         PlaneGeometry,
         Scene,
         TextureLoader,
         VideoTexture,
         Mesh,
         MeshStandardMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Utils } from '../utils/Utils'
import SceneRendererTJS from '../SceneRendererTJS'

interface ARvideo {
  play: () => void;
}

interface Entity {
    name: string,
    mesh: Object3D
}

export default class NFTaddTJS {
    private entities: Entity[] = [];
    private names: Array<string>;
    private scene: Scene;
    private uuid: string;
    constructor(uuid: string) {
        this.scene = SceneRendererTJS.getGlobalScene();
        this.uuid = uuid;
        this.names = [];
    }
    public add(mesh: Object3D, name: string, objVisibility: boolean) {
        document.addEventListener('getNFTData-' + this.uuid + '-' + name, (ev: any) => {
            var msg = ev.detail;
            mesh.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
            mesh.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
        })
        const root = new Object3D();
        root.name = 'root-' + name;
        root.matrixAutoUpdate = false;
        this.scene.add(root);
        root.add(mesh);
        document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, (ev: any) => {
          root.visible = true
          mesh.visible = true
          const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
          Utils.setMatrix(root.matrix, matrix)
        })
        document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, (ev: any) => {
          root.visible = objVisibility
          mesh.visible = objVisibility
        })
        this.names.push(name);
        this.entities.push({name, mesh})
    }

    public addModel (url: string, name: string, x: number, y: number, z: number, scale: number) {
        const root = new Object3D();
        root.name = 'root-' + name;
        root.matrixAutoUpdate = false;
        this.scene.add(root);
        let model: any
        /* Load Model */
        const threeGLTFLoader = new GLTFLoader()
        threeGLTFLoader.load(url, gltf => {
            model = gltf.scene
            model.scale.set(scale, scale, scale)
            model.rotation.x = Math.PI / 2
            model.position.x = x
            model.position.y = y
            model.position.z = z
            root.add(model)
        })
        document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, (ev: any) => {
            root.visible = true
            model.visible = true
            const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
            Utils.setMatrix(root.matrix, matrix)
          })
          document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, (ev: any) => {
            root.visible = false
            model.visible = false
          })
          this.names.push(name);
    }
    public addImage (imageUrl: string, name: string, color: string, scale: number) {
      const root = new Object3D();
      root.name = 'root-' + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      const planeGeom = new PlaneGeometry(1, 1, 1, 1)
      const texture = new TextureLoader().load(imageUrl)
      const material = new MeshStandardMaterial({ color: color, map: texture});
      const plane = new Mesh(planeGeom, material)
      plane.scale.set(scale, scale, scale)
      document.addEventListener('getNFTData-' + this.uuid + '-' + name, (ev: any) => {
            var msg = ev.detail
            plane.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
            plane.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
      })
      root.add(plane)
      document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, (ev: any) => {
           root.visible = true
           plane.visible = true
           const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
           Utils.setMatrix(root.matrix, matrix)
      })
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, (ev: any) => {
           root.visible = false
           plane.visible = false
      })
      this.names.push(name);
    }
    public addVideo (id: string, name: string, scale: number) {
      const root = new Object3D();
      root.name = 'root-' + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      const ARVideo: HTMLVideoElement = document.getElementById(id) as HTMLVideoElement;
      const texture = new VideoTexture(ARVideo as HTMLVideoElement)
      const mat = new MeshStandardMaterial({ color: 0xbbbbff, map: texture })
      ARVideo.play()
      const planeGeom = new PlaneGeometry(1, 1, 1, 1)
      const plane = new Mesh(planeGeom, mat)
      plane.scale.set(scale, scale, scale)
      document.addEventListener('getNFTData-' + this.uuid + '-' + name, (ev: any) => {
           var msg = ev.detail
           plane.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
           plane.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
      })
      root.add(plane)
      document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, (ev: any) => {
           root.visible = true
           plane.visible = true
           const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
           Utils.setMatrix(root.matrix, matrix)
      })
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, (ev: any) => {
          root.visible = false
          plane.visible = false
      })
      this.names.push(name);
    }

    public getNames() {
      return this.names
    }
}
