import { IStat } from "../../../models/IStat";

export interface StatState {
    statistics: [IStat];
    error: string;
}

export enum StatActionEnum {
    SET_STATISTICS = "SET_STATISTICS",
    SET_ERROR = "SET_ERROR",
}

interface SetStatAction {
    type: StatActionEnum.SET_STATISTICS;
    payload: [IStat];
}

interface SetErrorAction {
    type: StatActionEnum.SET_ERROR;
    payload: string;
}
 


export type StatAction = 
SetStatAction |
SetErrorAction 
