import axios from "axios";
import { AppDispatch } from "../..";
import { IResp } from "../../../models/IResp";
import { IStat } from "../../../models/IStat";
import { StatAction, StatActionEnum } from "./types";


export const StatActionCreators = {
    setStat: (payload: [IStat]): StatAction => ({ type: StatActionEnum.SET_STATISTICS, payload }),
    setError: (payload: string): StatAction => ({ type: StatActionEnum.SET_ERROR, payload }),
    getStatistics: (order: string, offset: string, limit: string, token: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://79.143.31.216/statistics',
                params: {
                    order,
                    offset,
                    limit
                },
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })

            if (response.status === 200) {
                dispatch(StatActionCreators.setError(''));
                dispatch(StatActionCreators.setStat(response.data));
            } else {
                dispatch(StatActionCreators.setError('Произошла ошибка при загрузке созданных ссылок'))
                alert(response.data)
            }
        } catch (e) {
            dispatch(StatActionCreators.setError('Произошла ошибка при загрузке созданных ссылок'));
            alert(e);
            console.log(token);
            
        }
    },

}