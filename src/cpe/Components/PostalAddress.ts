import { Country } from './Country';

export class PostalAddress
{
    private _id: string;
    private _StreetName: string;
    private _CitySubdivisionName: string;
    private _CityName: string;
    private _CountrySubentity: string;
    private _District: string;
    private _Country: Country;

    get Id(): string{
        return this._id;
    }
    set Id(Id: string){
        this._id = Id;
    }

    get StreetName(): string{
        return this._StreetName;
    }
    set StreetName(StreetName: string){
        this._StreetName = StreetName;
    }

    get CitySubdivisionName(): string{
        return this._CitySubdivisionName;
    }
    set CitySubdivisionName(CitySubdivisionName: string){
        this._CitySubdivisionName = CitySubdivisionName;
    }

    get CityName(): string{
        return this._CityName;
    }
    set CityName(CityName: string){
        this._CityName = CityName;
    }

    get CountrySubentity(): string{
        return this._CountrySubentity;
    }
    set CountrySubentity(CountrySubentity: string){
        this._CountrySubentity = CountrySubentity;
    }

    get District(): string{
        return this._District;
    }
    set District(District: string){
        this._District = District;
    }

    constructor(){
        this._Country = new Country();
    }
}
