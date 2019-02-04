import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import IState from "../../setup/IState";
import {from, Observable} from "rxjs";
import {actionUserInfoComplete, actionUserInfoUpdate, IActionUserInfo, TypeActionUserInfo} from "./actionUserInfo";
import {switchMap} from "rxjs/operators";
import mockState from "../../_mocks/mockState";

export const epicUserInfo: Epic<Action, Action, IState> = (action$, state$ ): Observable<any> =>
    action$.pipe(
        ofType(TypeActionUserInfo.Fetch),
        switchMap((action: IActionUserInfo) => {
            // const {userIdentity} = action;

            // make API request to fetch user Info
            return from([actionUserInfoUpdate(mockState.userInfo),
                actionUserInfoComplete()
            ])
        })
        // tap(
        //     () => {
        //         utilLoader.load(LocaSource);
        //     }
        // ),
    );