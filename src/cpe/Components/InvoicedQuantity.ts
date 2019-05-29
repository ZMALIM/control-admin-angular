export class InvoicedQuantity{
    private _UnitCode: string;
    private _Value: string;

    get UnitCode(): string{
        return this._UnitCode;
    }
    set UnitCode(unitCode: string){
        this._UnitCode = unitCode;
    }

    get Value(): string{
        return this._Value;
    }
    set Value(value: string){
        this._Value = value;
    }
}
