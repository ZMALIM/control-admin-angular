export class SunatRoadTransport{
    private _LicensePlateId: string;
    private _TransportAuthorizationCode: string;
    private _BrandName: string;

    get LicensePlateId(): string{
        return this._LicensePlateId;
    }
    set LicensePlateId(licensePlateId: string){
        this._LicensePlateId = licensePlateId;
    }

    get TransportAuthorizationCode(): string{
        return this._TransportAuthorizationCode;
    }
    set TransportAuthorizationCode(transportAuthorizationCode: string){
        this._TransportAuthorizationCode = transportAuthorizationCode;
    }

    get BrandName(): string{
        return this._BrandName;
    }
    set BrandName(brandName: string){
        this._BrandName = brandName;
    }
}
