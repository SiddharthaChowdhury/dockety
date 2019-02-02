import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import IState from "../setup/IState";
import {Observable} from "rxjs";
import {TypeActionAuth} from "../features/auth/actionAuth";
import {tap} from "rxjs/operators";

export const epicLoca: Epic<Action, Action, IState> = (action$, state$ ): Observable<any> =>
    action$.pipe(
        ofType(TypeActionAuth.authComplete),
        tap(
            () => {
                // utilLoader.loadResource();
            }
        )
    );