import{Position} from './position';
import{Status} from './status';

export class Station {
    number: number;
    contract_name: string;
    name : string;
    address: string;
    position:Position;
    banking: boolean;
    bonus: boolean;
    status: Status;
    bike_stands: number;
    available_bike_stands: number;
    available_bikes: number;
    last_update: Date;
    distance: number;
}