import { AdditionalInformation } from './AdditionalInformation';

export class ExtensionContent{
    private _AdditionalInformation: AdditionalInformation;

    get AdditionalInformation(): AdditionalInformation{
        return this._AdditionalInformation;
    }
    set AdditionalInformation(additionalInformation: AdditionalInformation){
        this._AdditionalInformation = additionalInformation;
    }

    constructor(){
        this._AdditionalInformation = new AdditionalInformation();
    }
}
