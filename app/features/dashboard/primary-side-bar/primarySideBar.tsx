import * as React from "react";
import IState from "../../../config/IState";
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface IPrimarySideBarState {}
interface IPrimarySideBarDispatch {}
interface IPrimarySideBarProps {}

class PrimarySideBarDOM extends React.Component<IPrimarySideBarProps> {
    public render () {
        return (
            <div/>
        )
    }
}

const mapState = (state: IState): IPrimarySideBarState => ({});
const mapDispatch = (dispatch: Dispatch): IPrimarySideBarDispatch => ({});

export const primarySideBar = connect<IPrimarySideBarState, IPrimarySideBarDispatch>(mapState, mapDispatch)(PrimarySideBarDOM);