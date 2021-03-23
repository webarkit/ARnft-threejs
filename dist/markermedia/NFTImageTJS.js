import { NFTNodeTJS } from "../NFTRootTJS";
import { TextureLoader, PlaneGeometry, Mesh, MeshStandardMaterial } from 'three';
export class NFTImageTJS extends NFTNodeTJS {
    constructor(root) {
        super();
        this.imageRoot = root;
    }
    addNFTImage(imageUrl, width, height) {
        const geometry = new PlaneGeometry(width, height, 30);
        const texture = new TextureLoader().load(imageUrl);
        const material = new MeshStandardMaterial({ map: texture });
        const plane = new Mesh(geometry, material);
        this.imageRoot.add(plane);
    }
}
//# sourceMappingURL=NFTImageTJS.js.map