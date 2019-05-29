import { Party } from './Party';

export class AccountingSupplierParty
{
    private _CustomerAssignedAccountId: string;
    private _AdditionalAccountId: string;
    private _Party: Party;

    get CustomerAssignedAccountId(): string{
        return this._CustomerAssignedAccountId;
    }
    set CustomerAssignedAccountId(CustomerAssignedAccountId: string){
        this._CustomerAssignedAccountId = CustomerAssignedAccountId;
    }

    get AdditionalAccountId(): string{
        return this._AdditionalAccountId;
    }
    set AdditionalAccountId(AdditionalAccountId: string){
        this._AdditionalAccountId = AdditionalAccountId;
    }

    get Party(): Party{
        return this._Party;
    }
    set Party(party: Party){
        this._Party = party;
    }
}
