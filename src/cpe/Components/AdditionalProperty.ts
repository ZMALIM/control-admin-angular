export class AdditionalProperty
{
    private _Id: string;
    private _Name: string;
    private _Value: string;

    get Id(): string{
        return this._Id;
    }
    set Id(Id: string){
        this._Id = Id;
    }

    get Name(): string{
        return this._Name;
    }
    set Name(Name: string){
        this._Name = Name;
    }

    get Value(): string{
        return this._Value;
    }
    set Value(Value: string){
        this._Value = Value;
    }
}