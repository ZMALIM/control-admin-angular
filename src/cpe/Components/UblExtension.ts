import { ExtensionContent } from './ExtensionContent';

export class UblExtension{
    private _ExtensionContent: ExtensionContent;

    get ExtensionContent(): ExtensionContent{
        return this._ExtensionContent;
    }
    set ExtensionContent(extensionContent: ExtensionContent){
        this._ExtensionContent = extensionContent;
    }

    constructor(){
        this._ExtensionContent = new ExtensionContent();
    }
}
