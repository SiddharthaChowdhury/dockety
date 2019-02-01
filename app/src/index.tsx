import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Provider} from "react-redux";
import {Store} from "../config/store";
import 'bootstrap/dist/css/bootstrap.min.css'; //https://reactstrap.github.io/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import Auth from "../features/auth";

import "./styles/index.min.css";

library.add(faIgloo);

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <Route path="/" component={Auth} />
        </Router>
    </Provider>,
    document.getElementById("root")
);