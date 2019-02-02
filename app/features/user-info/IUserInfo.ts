import {IdLocaType} from "../../loca/IdLocaType";

export interface IUserInfo {
    id: string;
    name: string;
    email: string;
    loca?: IdLocaType;
}