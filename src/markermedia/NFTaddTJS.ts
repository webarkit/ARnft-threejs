import { Object3D } from 'three'

export class NFTaddTJS {
    private modelRoot: Object3D;
    constructor(root: Object3D) {
        this.modelRoot = root;
    }

    public addModel(model: Object3D) {
        document.addEventListener('getNFTData', (ev: any) => {
            var msg = ev.detail
            model.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
            model.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
        })
        this.modelRoot.add(model);
    }
}
