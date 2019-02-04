import * as React from 'react';
import {Action, Dispatch} from "redux";
import {actionCheckIsLoggedIn} from "./actionAuth";
import {connect} from "react-redux";
import IState from "../../setup/IState";
import {selectAuthInfo} from "./selectAuthInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./style/auth.css";

interface ISignupState {
    state: IState;
    status: boolean
}

interface ISignupDispatch {
    onLoadCheckLogin: () => Action<any>
}

interface ISignupProps extends ISignupState, ISignupDispatch {}

class _Auth extends React.PureComponent<ISignupProps> {
    public render (){
        console.log("State", this.props.state);
        const props = this.props;
        return (
            <div>
                Favorite Food: <FontAwesomeIcon icon="igloo" />
                <h4>Is logged in? : {props.status.toString()}</h4>
                <button onClick={props.onLoadCheckLogin}>Login please</button>
            </div>
        );
    }
}

const mapState = (state: IState) => ({
    state: state,
    status: selectAuthInfo(state)
});

const mapDispatch = (dispatch: Dispatch) => ({
    onLoadCheckLogin: () => dispatch(actionCheckIsLoggedIn())
});

export default connect(mapState, mapDispatch)(_Auth);