import React from "react";
import { render } from 'react-dom';
import {browserHistory, Router} from "react-router";
import {Provider} from 'react-redux';
import routes from "./routes";
import './styles/styles.css';
import configureStore from './store/configureStore';
import {loadNotes} from "./actions/noteActions";

const store = configureStore();
store.dispatch(loadNotes());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
