export class Country
{
    private _IdentificationCode: string;

    get IdentificationCode(): string{
        return this._IdentificationCode;
    }
    set IdentificationCode(IdentificationCode: string){
        this._IdentificationCode = IdentificationCode;
    }
}
