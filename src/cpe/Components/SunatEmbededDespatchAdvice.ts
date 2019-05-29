import { PostalAddress } from './PostalAddress';
import { AccountingSupplierParty } from './AccountingSupplierParty';
import { AgentParty } from './AgentParty';
import { SunatRoadTransport } from './SunatRoadTransport';
import { InvoicedQuantity } from './InvoicedQuantity';

export class SunatEmbededDespatchAdvice
{
    private _DeliveryAddress: PostalAddress;
    private _OriginAddress: PostalAddress;
    private _SunatCarrierParty: AccountingSupplierParty;
    private _DriverParty: AgentParty;
    private _SunatRoadTransport: SunatRoadTransport;
    private _TransportModeCode: string;
    private _GrossWeightMeasure: InvoicedQuantity;

    get DeliveryAddress(): PostalAddress{
        return this._DeliveryAddress;
    }
    set DeliveryAddress(deliveryAddress: PostalAddress){
        this._DeliveryAddress = deliveryAddress;
    }

    get OriginAddress(): PostalAddress{
        return this._OriginAddress;
    }
    set OriginAddress(originAddress: PostalAddress){
        this._OriginAddress = originAddress;
    }

    get SunatCarrierParty(): AccountingSupplierParty{
        return this._SunatCarrierParty;
    }
    set SunatCarrierParty(sunatCarrierParty: AccountingSupplierParty){
        this._SunatCarrierParty = sunatCarrierParty;
    }

    get DriverParty(): AgentParty{
        return this._DriverParty;
    }
    set DriverParty(driverParty: AgentParty){
        this._DriverParty = driverParty;
    }

    get SunatRoadTransport(): SunatRoadTransport{
        return this._SunatRoadTransport;
    }
    set SunatRoadTransport(sunatRoadTransport: SunatRoadTransport){
        this._SunatRoadTransport = sunatRoadTransport;
    }

    get TransportModeCode(): string{
        return this._TransportModeCode;
    }
    set TransportModeCode(transportModeCode: string){
        this._TransportModeCode = transportModeCode;
    }

    get GrossWeightMeasure(): InvoicedQuantity{
        return this._GrossWeightMeasure;
    }
    set GrossWeightMeasure(grossWeightMeasure: InvoicedQuantity){
        this._GrossWeightMeasure = grossWeightMeasure;
    }

    constructor(){
        this._DeliveryAddress = new PostalAddress();
        this._OriginAddress = new PostalAddress();
        this._SunatCarrierParty = new AccountingSupplierParty();
        this._DriverParty = new AgentParty();
        this._SunatRoadTransport = new SunatRoadTransport();
        this._GrossWeightMeasure = new InvoicedQuantity();
    }
}

