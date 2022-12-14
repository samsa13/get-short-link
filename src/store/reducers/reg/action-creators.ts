import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { RegAction, RegActionEnum } from "./types";

export const RegActionCreators = {
    setUser: (user: IUser): RegAction => ({ type: RegActionEnum.SET_USER, payload: user }),
    setIsReg: (isReg: boolean): RegAction => ({ type: RegActionEnum.SET_REG, payload: isReg }),
    setIsLoading: (payload: boolean): RegAction => ({ type: RegActionEnum.SET_IS_LOADING, payload }),
    setError: (payload: string): RegAction => ({ type: RegActionEnum.SET_ERROR, payload }),
    reg: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(RegActionCreators.setIsLoading(true));
           
            const response = await axios({
                method: 'post',
                url: 'http://79.143.31.216/register',
                params: {
                    username,
                    password
                },
                data: '',
                headers: {
                    'accept': 'application/json',
                }
            })
          
            if (response.status === 200) {
                dispatch(RegActionCreators.setError(''))
                dispatch(RegActionCreators.setIsReg(true));
                dispatch(RegActionCreators.setUser({ username, password }));  
            } else {
                dispatch(RegActionCreators.setError('Пользователь уже зарегистрирован'))
            }
            dispatch(RegActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(RegActionCreators.setError('Произошла ошибка при регистрации пользователя'));
            alert(e)
        }
    },

}