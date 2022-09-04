import { AuthActionCreators } from "./auth/action-creators";
import { LinkActionCreators } from "./get-link/action-creators";
import { RegActionCreators } from "./reg/action-creators";
import { StatActionCreators } from "./statistics/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...RegActionCreators,
    ...LinkActionCreators,
    ...StatActionCreators,
}