import { SunatRoadTransport } from './SunatRoadTransport';

export class SunatCosts{
    private _RoadTransport: SunatRoadTransport;
    
    get RoadTransport(): SunatRoadTransport{
        return this._RoadTransport;
    }
    set RoadTransport(roadTransport: SunatRoadTransport){
        this._RoadTransport = roadTransport;
    }
    
    constructor(){
        this._RoadTransport = new SunatRoadTransport();
    }
}
