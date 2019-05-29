import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';

export class AgentParty{
    private _PartyIdentification: PartyIdentification;
    private _PartyName: PartyName;
    private _PostalAddress: PostalAddress;
    private _PartyLegalEntity: PartyLegalEntity;
    
    get PartyIdentification(): PartyIdentification{
        return this._PartyIdentification;
    }
    set PartyIdentification(partyIdentification: PartyIdentification){
        this._PartyIdentification = partyIdentification;
    }

    get PartyName(): PartyName{
        return this._PartyName;
    }
    set PartyName(partyName: PartyName){
        this._PartyName = partyName;
    }

    get PostalAddress(): PostalAddress{
        return this._PostalAddress;
    }
    set PostalAddress(postalAddress: PostalAddress){
        this._PostalAddress = postalAddress;
    }

    get PartyLegalEntity(): PartyLegalEntity{
        return this._PartyLegalEntity;
    }
    set PartyLegalEntity(partyLegalEntity: PartyLegalEntity){
        this._PartyLegalEntity = partyLegalEntity;
    }

    constructor(){
        this._PartyIdentification = new PartyIdentification();
        this._PartyName = new PartyName();
        this._PartyLegalEntity = new PartyLegalEntity();
    }
}
