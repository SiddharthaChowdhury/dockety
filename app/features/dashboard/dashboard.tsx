import {Action, Dispatch} from "redux";
import * as React from "react";
import IState from "../../config/IState";
import {connect} from "react-redux";

interface IDashboardState {}
interface IDashboardDispatch {
    onNewDoc: () => Action<any>
}
interface IDashboardProps extends IDashboardState, IDashboardDispatch {}

class DashboardDOM extends React.Component<IDashboardProps> {
    public render () {
        return (
            <div className={'container-fluid'}>

            </div>
        )
    }
}

const mapState = (state: IState): IDashboardState => ({});
const mapDispatch = (dispatch: Dispatch): IDashboardDispatch => ({
    onNewDoc: () => undefined as any,
});

export const dashboard = connect<IDashboardState, IDashboardDispatch>(mapState, mapDispatch)(DashboardDOM);