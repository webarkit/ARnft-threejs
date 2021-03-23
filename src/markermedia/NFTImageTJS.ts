import { NFTNodeTJS } from "../NFTRootTJS";
import { Object3D, TextureLoader, PlaneGeometry, Mesh, MeshStandardMaterial } from 'three'

export class NFTImageTJS extends NFTNodeTJS {
    private imageRoot: Object3D;
    constructor(root: Object3D) {
        super()
        this.imageRoot = root;
    }

    public addNFTImage(imageUrl: string, width: number, height: number) {
        const geometry = new PlaneGeometry( width, height, 30 );
        const texture = new TextureLoader().load( imageUrl );
        const material = new MeshStandardMaterial({map: texture});
        const plane = new Mesh( geometry, material );
        this.imageRoot.add(plane);
    }
}
