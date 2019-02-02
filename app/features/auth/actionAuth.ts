import {Action} from "redux";

export const enum TypeActionAuth {
    checkLogin = "AuthInfo > checkLogin",
    authComplete = "AuthInfo > authComplete",
};

export interface IActionAuth extends Action {
    status?: boolean;
    type: TypeActionAuth;
}

export const actionCheckIsLoggedIn = (): IActionAuth => ({
    type: TypeActionAuth.checkLogin,
});

export const actionSetIsLoggedIn = (status: boolean): IActionAuth => ({
    type: TypeActionAuth.authComplete,
    status
});