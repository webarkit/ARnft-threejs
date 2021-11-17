export declare class DelayableSignalFilter {
    private _inDelay;
    private _totalTime;
    private _prevTime;
    private _timeOut;
    constructor(timeOut: number);
    Update(tick: boolean): boolean;
}
