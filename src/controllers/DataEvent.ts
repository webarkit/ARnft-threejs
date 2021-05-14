
export class DataEvent extends Event {

    public data: any;

    constructor(type: string, data: any, eventInitDict?: EventInit) {
        super(type, eventInitDict);
        this.data = data;
    }
}