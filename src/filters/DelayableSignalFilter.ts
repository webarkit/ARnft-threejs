import { getTime } from "../utils/Utils";

export class DelayableSignalFilter {
    private _inDelay: boolean;
    private _totalTime: number;
    private _prevTime: number;

    private _timeOut: number;

    constructor(timeOut: number) {
        this._timeOut = timeOut;
        this._inDelay = false;
    }

    public Update(tick: boolean): boolean {
        let time: number = getTime();

        if (!this._inDelay) {
            this._prevTime = time;
            this._totalTime = 0;
        }

        this._totalTime += time - this._prevTime;

        if (this._inDelay && this._totalTime > this._timeOut) {
            this._inDelay = false;
            return true;
        }

        if (tick) {
            this._inDelay = true;
            return false;
        }
        this._inDelay = false;

        return false;
    }
}
