
export interface LinkState {
    link: string;
    shortLink: string;
    isLoading: boolean;
    error: string;
}

export enum LinkActionEnum {
    SET_LINK = "SET_LINK",
    SET_SHORT_LINK = 'SET_SHORT_LINK',
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING",
}

interface SetLinkAction {
    type: LinkActionEnum.SET_LINK;
    payload: string;
}
interface SetShortLinkAction {
    type: LinkActionEnum.SET_SHORT_LINK;
    payload: string;
}

interface SetErrorAction {
    type: LinkActionEnum.SET_ERROR;
    payload: string;
}
 
interface SetIsLoadingAction {
    type: LinkActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type LinkAction = 
SetLinkAction |
SetErrorAction |
SetShortLinkAction |
SetIsLoadingAction