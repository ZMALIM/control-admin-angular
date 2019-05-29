export class PartyName
{
    private _Name: string;

    get Name(): string{
        return this._Name;
    }
    set Name(Name: string){
        this._Name = Name;
    }
}
