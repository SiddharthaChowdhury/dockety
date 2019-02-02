import {IUserInfo} from "./IUserInfo";

export interface IActionUserInfo {
    userIdentity?: string;
    userInfo?: IUserInfo;
    type: TypeActionUserInfo
}
export const enum TypeActionUserInfo {
    Fetch = "UserInfo > Fetch",
    Update = "UserInfo > Update",
    Complete = "UserInfo > COmplete",
}

export const actionUserInfoFetch = (userIdentity: string): IActionUserInfo => ({
    userIdentity,
    type: TypeActionUserInfo.Fetch,
});

export const actionUserInfoUpdate = (userInfo: IUserInfo): IActionUserInfo => ({
    userInfo,
    type: TypeActionUserInfo.Update
});

export const actionUserInfoComplete = (): IActionUserInfo => ({
    type: TypeActionUserInfo.Complete
});