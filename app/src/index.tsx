import * as React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Provider} from "react-redux";
import {Store} from "../setup/store";
import 'bootstrap/dist/css/bootstrap.min.css'; //https://reactstrap.github.io/

import { library } from '@fortawesome/fontawesome-svg-core' // https://fontawesome.com/icons?d=gallery&m=free
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import Auth from "../features/auth";
import {Dashboard} from "../features/dashboard/dashboard";

import "./styles/index.min.css";

library.add(faIgloo);

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route exact path="/home" component={Dashboard}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);