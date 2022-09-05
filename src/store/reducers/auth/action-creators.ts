import axios from "axios";
import { AppDispatch } from "../..";
import { IResp } from "../../../models/IResp";
import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnum } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): AuthAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (isAuth: boolean): AuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: isAuth }),
    setIsLoading: (payload: boolean): AuthAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
    setError: (payload: string): AuthAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
    setToken: (token: string): AuthAction => ({type: AuthActionEnum.SET_TOKEN, payload: token}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await axios({
                method: 'post',
                url: 'http://79.143.31.216/login',
                data: 'grant_type=&username=' + username + '&password=' + password + '&scope=&client_id=&client_secret=',
                headers: {
                    accept: 'application/json',
                    contentType: 'application/x-www-form-urlencoded',
                }
            })
         
            if (response.status === 200) {
                const token: string = response.data.access_token;
                dispatch(AuthActionCreators.setToken(token));
                dispatch(AuthActionCreators.setIsAuth(true));
                dispatch(AuthActionCreators.setUser({ username: username, password: password }));  
                localStorage.setItem('isAuth', 'true');
                localStorage.setItem('username', username);
                localStorage.setItem('token', token)
            } else {
                dispatch(AuthActionCreators.setError('Пользователя с таким логином и паролем не существует, попробуйте зарегистрироваться'))
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при вводе логина/пароля'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false));
        localStorage.removeItem('isAuth');
        localStorage.removeItem('username');
    }
}