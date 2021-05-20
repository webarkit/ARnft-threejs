export class NFTaddTJS {
    constructor(root) {
        this.modelRoot = root;
    }
    addModel(model) {
        document.addEventListener('getNFTData', (ev) => {
            var msg = ev.detail;
            model.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0;
            model.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0;
        });
        this.modelRoot.add(model);
    }
}
//# sourceMappingURL=NFTaddTJS.js.map