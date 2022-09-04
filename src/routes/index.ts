import React from "react";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import Registration from "../pages/Registration";

export interface IRoute {
    path: string;
    component: React.ComponentType;

}

export enum RoutNames {
    LOGIN = '/',
    REG = '/reg',
    MAIN_PAGE = '/main'
}

export const publicRoutes: IRoute[] = [
    {path: RoutNames.LOGIN, component: Login},
    {path: RoutNames.REG, component: Registration},
]

export const privateRoutes: IRoute[] = [
    {path: RoutNames.MAIN_PAGE, component: MainPage},
]