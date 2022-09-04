import { IUser } from "../../../models/IUser";

export interface RegState {
    isReg: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum RegActionEnum {
    SET_REG = "SET_REG",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

interface SetRegAction {
    type: RegActionEnum.SET_REG;
    payload: boolean;
}
interface SetErrorAction {
    type: RegActionEnum.SET_ERROR;
    payload: string;
}
interface SetUserAction {
    type: RegActionEnum.SET_USER;
    payload: IUser;
}
interface SetIsLoadingAction {
    type: RegActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type RegAction = 
SetRegAction |
SetErrorAction |
SetUserAction |
SetIsLoadingAction