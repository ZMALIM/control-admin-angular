import { UblExtensions } from '../Components/UblExtensions';
import { DiscrepancyResponse } from '../Components/DiscrepancyResponse';

export class CreditNote {
    private _UblExtensions: UblExtensions;
    private _UblVersionId: string;
    private _CustomizationId: string;
    private _Id: string;
    private _IssueDate: Date = new Date();
    private _DocumentCurrencyCode: string;
    private _DiscrepancyResponses: Array<DiscrepancyResponse>;

    get UblExtensions(): UblExtensions{
        return this._UblExtensions;
    }
    set UblExtensions(ublExtensions: UblExtensions){
        this._UblExtensions = ublExtensions;
    }

    get UblVersionId(): string{
        return this._UblVersionId;
    }
    set UblVersionId(ublVersionId: string){
        this._UblVersionId = ublVersionId;
    }

    get CustomizationId(): string{
        return this._CustomizationId;
    }
    set CustomizationId(customizationId: string){
        this._CustomizationId = customizationId;
    }

    get Id(): string{
        return this._Id;
    }
    set Id(id: string){
        this._Id = id;
    }

    get IssueDate(): Date{
        return this._IssueDate;
    }
    set IssueDate(issueDate: Date){
        this._IssueDate = issueDate;
    }

    get DocumentCurrencyCode(): string{
        return this._DocumentCurrencyCode;
    }
    set DocumentCurrencyCode(documentCurrencyCode: string){
        this._DocumentCurrencyCode = documentCurrencyCode;
    }

    get DiscrepancyResponses(): Array<DiscrepancyResponse>{
        return this._DiscrepancyResponses;
    }
    set DiscrepancyResponses(discrepancyResponses: Array<DiscrepancyResponse>){
        this._DiscrepancyResponses = discrepancyResponses;
    }

    constructor(){
        this._UblExtensions = new UblExtensions();
        this._DiscrepancyResponses = new Array<DiscrepancyResponse>();
    }
}
