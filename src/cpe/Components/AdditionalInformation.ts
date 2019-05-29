import { AdditionalMonetaryTotal } from './AdditionalMonetaryTotal';
import { AdditionalProperty } from './AdditionalProperty';
import { SunatEmbededDespatchAdvice } from './SunatEmbededDespatchAdvice';
import { SunatCosts } from './SunatCosts';
import { SunatTransaction } from './SunatTransaction';

export class AdditionalInformation
{
    private _AdditionalMonetaryTotals: Array<AdditionalMonetaryTotal>;
    private _AdditionalProperties: Array<AdditionalProperty>;
    private _SunatEmbededDespatchAdvice: SunatEmbededDespatchAdvice;
    private _SunatCosts: SunatCosts;
    private _SunatTransaction: SunatTransaction;

    get AdditionalMonetaryTotals(): Array<AdditionalMonetaryTotal>{
        return this._AdditionalMonetaryTotals;
    }
    set AdditionalMonetaryTotals(additionalMonetaryTotals: Array<AdditionalMonetaryTotal>){
        this._AdditionalMonetaryTotals = additionalMonetaryTotals;
    }

    get AdditionalProperties(): Array<AdditionalProperty>{
        return this._AdditionalProperties;
    }
    set AdditionalProperties(additionalProperties: Array<AdditionalProperty>){
        this._AdditionalProperties = additionalProperties;
    }

    get SunatEmbededDespatchAdvice(): SunatEmbededDespatchAdvice{
        return this._SunatEmbededDespatchAdvice;
    }
    set SunatEmbededDespatchAdvice(sunatEmbededDespatchAdvice: SunatEmbededDespatchAdvice){
        this._SunatEmbededDespatchAdvice = sunatEmbededDespatchAdvice;
    }

    get SunatCosts(): SunatCosts{
        return this._SunatCosts;
    }
    set SunatCosts(sunatCosts: SunatCosts){
        this._SunatCosts = sunatCosts;
    }

    get SunatTransaction(): SunatTransaction{
        return this._SunatTransaction;
    }
    set SunatTransaction(sunatTransaction: SunatTransaction){
        this._SunatTransaction = sunatTransaction;
    }

    constructor(){
        this._AdditionalMonetaryTotals = new Array<AdditionalMonetaryTotal>();
        this._AdditionalProperties = new Array<AdditionalProperty>();
        this._SunatEmbededDespatchAdvice = new SunatEmbededDespatchAdvice();
        this._SunatTransaction = new SunatTransaction();
        this._SunatCosts = new SunatCosts();
    }
}
