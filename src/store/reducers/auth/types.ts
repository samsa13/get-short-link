import { IResp } from "../../../models/IResp";
import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
    token: IResp
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_TOKEN = 'SET_TOKEN'
}

interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}
interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}
interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}
interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}
interface SetTokenAction {
    type: AuthActionEnum.SET_TOKEN;
    payload: IResp;
}

export type AuthAction = 
SetAuthAction |
SetErrorAction |
SetUserAction |
SetIsLoadingAction |
SetTokenAction