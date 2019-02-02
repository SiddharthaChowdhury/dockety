import {IUserInfo} from "./IUserInfo";
import {IdLocaType} from "../../loca/IdLocaType";
import {IActionUserInfo, TypeActionUserInfo} from "./actionUserInfo";

const initialUserInfo: IUserInfo = {
    id: "",
    name: "",
    email: "",
    loca: IdLocaType.en,
}

export const reducerUserInfo = (state: IUserInfo = initialUserInfo, action: IActionUserInfo) => {
    switch(action.type) {
        case TypeActionUserInfo.Update:
            return reducerUserInfoUpdate(state, action.userInfo!);
        default:
            return state;
    }
}

const reducerUserInfoUpdate = (state: IUserInfo, userInfo: IUserInfo) => ({
    ...state,
    ...userInfo
});