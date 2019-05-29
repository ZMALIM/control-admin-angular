import { PartyIdentificationId } from './PartyIdentificationId';

export class PartyIdentification{
    private _Id: PartyIdentificationId;

    get Id(): PartyIdentificationId{
        return this._Id;
    }
    set Id(id: PartyIdentificationId){
        this._Id = id;
    }

    constructor(){
        this._Id = new PartyIdentificationId();
    }
}
