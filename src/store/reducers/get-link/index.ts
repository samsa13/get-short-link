import { LinkAction, LinkActionEnum, LinkState } from "./types"

const initialState: LinkState = {
    link: '',
    shortLink: '',
    error: '',
    isLoading: false,
}

export default function regReducer(state = initialState, action: LinkAction): LinkState {
    switch (action.type) {
        case LinkActionEnum.SET_LINK:
            return { ...state, link: action.payload, isLoading: false}
        case LinkActionEnum.SET_SHORT_LINK:
            return {...state, shortLink: action.payload, isLoading: false}
        case LinkActionEnum.SET_ERROR:
            return { ...state, error: action.payload }
        case LinkActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }

}