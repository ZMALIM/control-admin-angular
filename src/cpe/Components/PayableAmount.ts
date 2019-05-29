export class PayableAmount {
    private _CurrencyId: string;
    private _Value: number;

    get CurrencyId(): string{
        return this._CurrencyId;
    }
    set CurrencyId(CurrencyId: string){
        this._CurrencyId = CurrencyId;
    }

    get Value(): number{
        return this._Value;
    }
    set Value(Value: number){
        this._Value = Value;
    }
}