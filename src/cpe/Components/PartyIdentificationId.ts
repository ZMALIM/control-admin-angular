export class PartyIdentificationId{
    private _SchemeId: string;
    private _Value: string;

    get SchemeId(): string{
        return this._SchemeId;
    }
    set SchemeId(schemeId: string){
        this._SchemeId = schemeId;
    }

    get Value(): string{
        return this._Value;
    }
    set Value(value: string){
        this._Value = value;
    }
}
