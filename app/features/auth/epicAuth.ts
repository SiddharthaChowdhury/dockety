import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import {actionSetIsLoggedIn, TypeActionAuth} from "./actionAuth";
import IState from "../../setup/IState";

import {switchMap} from 'rxjs/operators';
import {from, Observable} from "rxjs";
import {actionUserInfoFetch} from "../user-info/actionUserInfo";

export const epicCheckLogin: Epic<Action, Action, IState> = (action$, state$ ): Observable<any> =>
    action$.pipe(
        ofType(TypeActionAuth.checkLogin),
        switchMap(
            () => {
                console.log("process.env.ASSET_PATH: ", process.env.ASSET_PATH);

                const actions: Action[] = [
                    actionSetIsLoggedIn(true),
                    actionUserInfoFetch("1"),
                ];

                return from(actions);
            }
        )
    );
