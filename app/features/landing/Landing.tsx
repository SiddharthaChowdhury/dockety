import * as React from "react";
import {Redirect} from "react-router";
import authentication from "../authentication/authentication";
import {IdPersistence, utilPersistence} from "../../utils/utilPersistence";

interface ILandingState {
    redirectToReferrer: boolean;
}

export class Landing extends React.PureComponent {
    public state: ILandingState = {
        redirectToReferrer: false,
    }

    public render() {
        const {redirectToReferrer} = this.state;
        const {rememberMe} = utilPersistence.getValue(IdPersistence.auth);
        if (redirectToReferrer || rememberMe) {
            return (
                <Redirect to={'/dashboard'}/>
            )
        }
        
        return (
            <div>
                <h1>Landing</h1>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    };

    private handleLogin = () => {
        return authentication.login(() => {
            this.setState({
                redirectToReferrer: true,
            })
        });
    }
}

