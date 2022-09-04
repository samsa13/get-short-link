import axios from "axios";
import { AppDispatch } from "../..";
import { IResp } from "../../../models/IResp";
import { IStat } from "../../../models/IStat";
import { StatAction, StatActionEnum } from "./types";


export const StatActionCreators = {
    setStat: (payload: [IStat]): StatAction => ({ type: StatActionEnum.SET_STATISTICS, payload }),
    setError: (payload: string): StatAction => ({ type: StatActionEnum.SET_ERROR, payload }),
    getStatistics: (order: string, offset: string, limit: string, token: IResp) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://79.143.31.216/statistics?order='+ order + '&offset=' + offset + '&limit=' + limit,
                data: '',
                headers: {
                    Authorization: 'Bearer ' + token.access_token
                }
            })

            if (response.status === 200) {
                dispatch(StatActionCreators.setStat(response.data));
            } else {
                dispatch(StatActionCreators.setError('Пользователь уже зарегистрирован'))
            }
        } catch (e) {
            dispatch(StatActionCreators.setError('Произошла ошибка при логине'));
           // alert(e)
        }
    },

}