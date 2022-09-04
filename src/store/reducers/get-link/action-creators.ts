import axios from "axios";
import { AppDispatch } from "../..";
import { IResp } from "../../../models/IResp";
import { LinkAction, LinkActionEnum } from "./types";


export const LinkActionCreators = {
    setLink: (link: string): LinkAction => ({ type: LinkActionEnum.SET_LINK, payload: link }),
    setShortLink: (shortLink: string): LinkAction => ({ type: LinkActionEnum.SET_SHORT_LINK, payload: shortLink }),
    setIsLoading: (payload: boolean): LinkAction => ({ type: LinkActionEnum.SET_IS_LOADING, payload }),
    setError: (payload: string): LinkAction => ({ type: LinkActionEnum.SET_ERROR, payload }),
    postLink: (link: string, token: IResp) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LinkActionCreators.setIsLoading(true));
            const response = await axios({
                method: 'post',
                url: 'http://79.143.31.216/squeeze?link=' + encodeURI(link),
                data: '',
                headers: {
                    Authorization: 'Bearer ' + token.access_token
                }
            })
            if (response.status === 200) {
                dispatch(LinkActionCreators.setLink(link));  
                dispatch(LinkActionCreators.setShortLink(response.data.short)); 
            } else {
                dispatch(LinkActionCreators.setError('Введена некорректная ссылка'))
            }
            dispatch(LinkActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(LinkActionCreators.setError('Произошла ошибка при создании короткой ссылки'));
            //alert(e);
            dispatch(LinkActionCreators.setIsLoading(false))
        }
    },

}