import { PayableAmount } from './PayableAmount';

export class AdditionalMonetaryTotal {
    private _Id: string;
    private _PayableAmount: PayableAmount;
    private _ReferenceAmount: PayableAmount;
    private _TotalAmount: PayableAmount;
    private _Percent: number;

    get Id(): string{
        return this._Id;
    }
    set Id(Id: string){
        this._Id = Id;
    }

    get PayableAmount(): PayableAmount{
        return this._PayableAmount; 
    }
    set PayableAmount(PA: PayableAmount) {
        this._PayableAmount = PA;
    }

    get ReferenceAmount(): PayableAmount{
        return this._ReferenceAmount;
    }
    set ReferenceAmount(RA: PayableAmount){
        this._ReferenceAmount = RA;
    }
    
    get TotalAmount(): PayableAmount{
        return this._TotalAmount; 
    }
    set TotalAmount(TA: PayableAmount){
        this._TotalAmount = TA;
    }

    get Percent(): number{
        return this._Percent;
    }
    set Percent(Percent: number){
        this._Percent = Percent;
    }
    constructor() {
        this.PayableAmount = new PayableAmount();
        this.ReferenceAmount = new PayableAmount();
        this.TotalAmount = new PayableAmount();
    }
}