import { CreditNote } from './CreditNote';
import { UblExtensions } from '../Components/UblExtensions';
import { UblExtension } from '../Components/UblExtension';
import { ExtensionContent } from '../Components/ExtensionContent';
import { AdditionalInformation } from '../Components/AdditionalInformation';
import { AdditionalMonetaryTotal } from '../Components/AdditionalMonetaryTotal';
import { PayableAmount } from '../Components/PayableAmount';

export class NotaCredito{
    public Generar(): void{
        const credtiNote = new CreditNote();
        credtiNote.UblExtensions = new UblExtensions();
        credtiNote.UblExtensions.Extension2 = new UblExtension();
        credtiNote.UblExtensions.Extension2.ExtensionContent = new ExtensionContent();
        credtiNote.UblExtensions.Extension2.ExtensionContent.AdditionalInformation = new AdditionalInformation();
        credtiNote.UblExtensions.Extension2.ExtensionContent.AdditionalInformation.AdditionalMonetaryTotals = new Array<AdditionalMonetaryTotal>();

        const ublex: UblExtensions = {
            Extension2: new UblExtension()
        };

        const cn: CreditNote = {
            UblExtensions: ublex,
            Id: 'doc',
            IssueDate: new Date(),
            DocumentCurrencyCode: 'Code',
        };
    }
}
