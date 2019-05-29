import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';

export class Party
{
    private _PartyName: PartyName;
    private _PostalAddress: PostalAddress;
    private _PartyLegalEntity: PartyLegalEntity;

    get PartyName(): PartyName{
        return this._PartyName;
    }
    set PartyName(PN: PartyName){
        this._PartyName = PN;
    }

    get PostalAddress(): PostalAddress{
        return this._PostalAddress;
    }
    set PostalAddress(PA: PostalAddress){
        this._PostalAddress = PA;
    }

    get PartyLegalEntity(): PartyLegalEntity{
        return this._PartyLegalEntity;
    }
    set PartyLegalEntity(PLE: PartyLegalEntity){
        this._PartyLegalEntity = PLE;
    }

    constructor(){
        this._PartyName = new PartyName();
        this._PostalAddress = new PostalAddress();
        this._PartyLegalEntity = new PartyLegalEntity();
    }
}
