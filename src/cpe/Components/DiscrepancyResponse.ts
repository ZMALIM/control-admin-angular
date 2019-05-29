export class DiscrepancyResponse{
    private _ReferenceId: string;
    private _ResponseCode: string;
    private _Description: string;

    get ReferenceId(): string{
        return this._ReferenceId;
    }
    set ReferenceId(referenceId: string){
        this._ReferenceId = referenceId;
    }

    get ResponseCode(): string{
        return this._ResponseCode;
    }
    set ResponseCode(responseCode: string){
        this._ResponseCode = responseCode;
    }

    get Description(): string{
        return this._Description;
    }
    set Description(description: string){
        this._Description = description;
    }
    constructor(){
        this._ReferenceId = '';
    }

    public Equals(other: DiscrepancyResponse): boolean{
        if (this._ReferenceId){
            return false;
        }
        return this._ReferenceId === other._ReferenceId;
    }

    public GetHashCode(): number{
        if (this._ReferenceId){
            return this.GetHashCode();
        }
    }
}
