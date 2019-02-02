import IState from "../../setup/IState";

export const selectAuthInfo = (state: IState): boolean => {
    return state.authInfo.status;
}