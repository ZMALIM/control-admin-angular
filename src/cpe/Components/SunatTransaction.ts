export class SunatTransaction{
    private _Id: string;
    
    get Id(): string{
        return this._Id;
    }
    set Id(id: string){
        this._Id = id;
    }
}
