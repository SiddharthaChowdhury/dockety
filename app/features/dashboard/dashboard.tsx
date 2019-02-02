import {Action, Dispatch} from "redux";
import * as React from "react";
import IState from "../../setup/IState";
import {connect} from "react-redux";
import {PrimaryTopNav} from "./primary-top-nav/PrimaryTopNav";
import {loader, utilLoader} from "../../utils/utilLoader";
import LocaSource from "../../loca/LocaSource";

interface IDashboardState {}
interface IDashboardDispatch {
    onNewDoc: () => Action<any>
}
interface IDashboardProps extends IDashboardState, IDashboardDispatch {}

class DashboardDOM extends React.Component<IDashboardProps> {
    componentDidMount(): void {
        console.log(loader.resources)
    }

    public render () {
        utilLoader.load(LocaSource);
        return (
            <div className={'container-fluid'}>
                <PrimaryTopNav/>
            </div>
        )
    }
}

const mapState = (state: IState): IDashboardState => ({});
const mapDispatch = (dispatch: Dispatch): IDashboardDispatch => ({
    onNewDoc: () => undefined as any,
});

export const Dashboard = connect<IDashboardState, IDashboardDispatch>(mapState, mapDispatch)(DashboardDOM);