export class PartyLegalEntity
{
    private _RegistrationName: string;

    get RegistrationName(): string{
        return this._RegistrationName;
    }
    set RegistrationName(RegistrationName: string){
        this._RegistrationName = RegistrationName;
    }
}
