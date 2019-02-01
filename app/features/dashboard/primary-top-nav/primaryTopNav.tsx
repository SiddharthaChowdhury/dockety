import * as React from "react";
import IState from "../../../config/IState";
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface IPrimaryTopNavState {}
interface IPrimaryTopNavDispatch {}
interface IPrimaryTopNavProps {}

class PrimaryTopNavDOM extends React.Component<IPrimaryTopNavProps> {
    public render () {
        return (
            <div/>
        )
    }
}

const mapState = (state: IState): IPrimaryTopNavState => ({});
const mapDispatch = (dispatch: Dispatch): IPrimaryTopNavDispatch => ({});

export const primaryTopNav = connect<IPrimaryTopNavState, IPrimaryTopNavDispatch>(mapState, mapDispatch)(PrimaryTopNavDOM);