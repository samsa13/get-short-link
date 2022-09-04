import { IUser } from "../../../models/IUser";
import { RegAction, RegActionEnum, RegState } from "./types";

const initialState: RegState = {
    isReg: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}

export default function regReducer(state = initialState, action: RegAction): RegState {
    switch (action.type) {
        case RegActionEnum.SET_REG:
            return { ...state, isReg: action.payload, isLoading: false}
        case RegActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case RegActionEnum.SET_USER:
            return { ...state, user: action.payload }
        case RegActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }

}