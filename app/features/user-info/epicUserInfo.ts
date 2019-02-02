import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import IState from "../../setup/IState";
import {from, Observable} from "rxjs";
import {actionUserInfoComplete, actionUserInfoUpdate, IActionUserInfo, TypeActionUserInfo} from "./actionUserInfo";
import {switchMap} from "rxjs/operators";
import {IdLocaType} from "../../loca/IdLocaType";

export const epicUserInfo: Epic<Action, Action, IState> = (action$, state$ ): Observable<any> =>
    action$.pipe(
        ofType(TypeActionUserInfo.Fetch),
        switchMap((action: IActionUserInfo) => {
            // const {userIdentity} = action;

            // make API request to fetch user Info
            return from([actionUserInfoUpdate({
                id: "1",
                name: "Siddhartha Chowdhury",
                email: "siddharthac_and_can_be_bigger6@gmail.com",
                loca: IdLocaType.en,
            }),
                actionUserInfoComplete()
            ])
        })
        // tap(
        //     () => {
        //         utilLoader.load(LocaSource);
        //     }
        // ),
    );