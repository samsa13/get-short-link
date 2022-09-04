import { IStat } from "../../../models/IStat"
import { StatAction, StatActionEnum, StatState } from "./types"


const initialState: StatState = {
    statistics: [{} as IStat],
    error: '',

}

export default function statReducer(state = initialState, action: StatAction): StatState {
    switch (action.type) {
        case StatActionEnum.SET_STATISTICS:
            return { ...state, statistics: action.payload}
        case StatActionEnum.SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }

}