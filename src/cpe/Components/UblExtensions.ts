import { UblExtension } from './UblExtension';

export class UblExtensions{
    private _Extension1: UblExtension;
    private _Extension2: UblExtension;

    get Extension1(): UblExtension{
        return this._Extension1;
    }    
    set Extension1(extension1: UblExtension){
        this._Extension1 = extension1;
    }

    get Extension2(): UblExtension{
        return this._Extension2;
    }
    set Extension2(extension2: UblExtension){
        this._Extension2 = extension2;
    }

    constructor(){
        this._Extension1 = new UblExtension();
        this._Extension2 = new UblExtension();
    }
}
