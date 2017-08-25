import {Position} from './position';

export class RegistrationViewModel{
    firstName: string;
    lastName: string;
    email: string;
    biography: string;
    dob: Date;
    teamIdJoined: number;
    heightInFeet: number;
    heigthInInches: number;
    weight: number;
    injuries: string[];
    position: Position;
    password: string;

    constructor(){
        this.injuries=[];
    }

}