import { Vector3 } from "three";

//https://github.com/DarioMazzanti/OneEuroFilterUnity/blob/master/Assets/Scripts/OneEuroFilter.cs
//https://github.com/DarioMazzanti/OneEuroFilterUnity/blob/master/Assets/Scripts/FilterTestVector3.cs
//https://gist.github.com/ThorstenBux/323183bb0bc2ccb92ff23ebdf3de6408

/* eslint-disable max-classes-per-file */
class LowPassFilter {
    y: number | null;

    s: number | null;

    alpha = 0;

    constructor(alpha: number) {
        this.setAlpha(alpha);
        this.y = null;
        this.s = null;
    }

    setAlpha(alpha: number) {
        if (alpha <= 0 || alpha > 1.0) {
            throw new Error();
        }
        this.alpha = alpha;
    }

    filter(value: number, timestamp: number, alpha: number) {
        if (alpha) {
            this.setAlpha(alpha);
        }
        let s;
        if (!this.y) {
            s = value;
        } else {
            s = this.alpha * value + (1.0 - this.alpha) * this.s!;
        }
        this.y = value;
        this.s = s;
        return s;
    }

    lastValue() {
        return this.y;
    }
}

export default class OneEuroFilter {
    freq: number;

    minCutOff: number;

    beta: number;

    dCutOff: number;

    x: LowPassFilter;

    dx: LowPassFilter;

    lasttime: number | null;

    public currValue: number;
    public prevValue: number;

    constructor(freq: number, minCutOff = 1.0, beta = 0.0, dCutOff = 1.0) {
        if (freq <= 0 || minCutOff <= 0 || dCutOff <= 0) {
            throw new Error();
        }
        this.freq = freq;
        this.minCutOff = minCutOff;
        this.beta = beta;
        this.dCutOff = dCutOff;
        this.x = new LowPassFilter(this.alpha(this.minCutOff));
        this.dx = new LowPassFilter(this.alpha(this.dCutOff));
        this.lasttime = null;

        this.currValue = 0.0;
        this.prevValue = this.currValue;
    }

    public alpha(cutOff: number) {
        const te = 1.0 / this.freq;
        const tau = 1.0 / (2 * Math.PI * cutOff);
        return 1.0 / (1.0 + tau / te);
    }

    public UpdateParams(_freq: number, _mincutoff: number = 1.0, _beta: number = 0, _dcutoff: number = 1): void {
        this.freq = _freq;
        this.minCutOff = _mincutoff;
        this.beta = _beta;
        this.dCutOff = _dcutoff;
        this.x.setAlpha(this.alpha(this.minCutOff));
        this.dx.setAlpha(this.alpha(this.dCutOff));
    }

    public Filter(x: number, timestamp: number | null = null): number {
        this.prevValue = this.currValue;
        if (this.lasttime && timestamp) {
            this.freq = 1.0 / (timestamp - this.lasttime);
        }
        this.lasttime = timestamp;
        const prevX = this.x.lastValue();
        const dx = !prevX ? 0.0 : (x - prevX) * this.freq;
        const edx = this.dx.filter(dx, timestamp!, this.alpha(this.dCutOff));
        const cutOff = this.minCutOff + this.beta * Math.abs(edx);
        return (this.currValue = this.x.filter(x, timestamp!, this.alpha(cutOff)));
    }
}

export class OneEuroFilterVector3 {
    // containst the type of T
    // the array of filters
    private oneEuroFilters: Array<OneEuroFilter>;

    private _freq: number;
    public get freq(): number {
        return this._freq;
    }

    private _beta: number;
    public get beta(): number {
        return this._beta;
    }

    private _dcutoff: number;
    public get dcutoff(): number {
        return this._dcutoff;
    }
    private _mincutoff: number;
    public get mincutoff_1(): number {
        return this._mincutoff;
    }

    // currValue contains the latest value which have been succesfully filtered
    // prevValue contains the previous filtered value

    private currValue: Vector3;
    private prevValue: Vector3;

    // initialization of our filter(s)
    constructor(_freq: number, _mincutoff: number = 1, _beta: number = 0, _dcutoff: number = 1) {
        this.currValue = new Vector3();
        this.prevValue = new Vector3();

        this._freq = _freq;
        this._mincutoff = _mincutoff;
        this._beta = _beta;
        this._dcutoff = _dcutoff;

        this.oneEuroFilters = [];
        this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
        this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
        this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
    }

    // updates the filter parameters
    public UpdateParams(_freq: number, _mincutoff: number = 1.0, _beta: number = 0, _dcutoff: number = 1): void {
        this._freq = _freq;
        this._mincutoff = _mincutoff;
        this._beta = _beta;
        this._dcutoff = _dcutoff;

        for (let i: number = 0; i < this.oneEuroFilters.length; i++)
            this.oneEuroFilters[i].UpdateParams(this._freq, this._mincutoff, this._beta, this._dcutoff);
    }

    // filters the provided _value and returns the result.
    // Note: a timestamp can also be provided - will override filter frequency.
    public Filter(_value: Vector3, timestamp: number = -1.0): Vector3 {
        this.prevValue = this.currValue;

        //let output: number[] = Vector3.ZeroReadOnly.asArray(); // Babylon code...
        let out: Vector3 = new Vector3();
        let output: number[] = out.toArray();

        //let input: number[] = _value.asArray(); // Babylon code
        let input: number[] = _value.toArray();

        this.oneEuroFilters.forEach((filters, idx) => {
            output[idx] = filters.Filter(input[idx], timestamp);
        });

        let arr: Vector3 = new Vector3();

        return (this.currValue = arr.fromArray(output));
    }
}
