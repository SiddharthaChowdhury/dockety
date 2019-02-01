import * as React from "react";
import IState from "../../../config/IState";
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface IHomeState {}
interface IHomeDispatch {}
interface IHomeProps {}

class HomeDOM extends React.Component<IHomeProps> {
    public render () {
        return (
            <div/>
        )
    }
}

const mapState = (state: IState): IHomeState => ({});
const mapDispatch = (dispatch: Dispatch): IHomeDispatch => ({});

export const home = connect<IHomeState, IHomeDispatch>(mapState, mapDispatch)(HomeDOM);