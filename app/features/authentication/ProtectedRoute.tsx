import * as React from "react";
import {Redirect, Route} from "react-router";
import authentication from "./authentication";

interface IProtectedRouteProps {
    component: typeof React.Component,
    path: string
}

export const ProtectedRoute: React.SFC<IProtectedRouteProps> = ({component: ProtectedComponent, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                authentication.isAuthenticated() ? <ProtectedComponent {...props}/>: <Redirect to={"/"}/>
            )
        }}/>
    )
}