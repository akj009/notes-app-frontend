import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import Home from "./components/home/Home";
import AddNote from "./components/notes/AddNote";
import ListNotes from './components/notes/ListNotes';
import ShowNote from './components/notes/ShowNote';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="addnote" component={AddNote} />
    <Route path="allnotes" component={ListNotes} />
    <Route path="note" component={ShowNote} />
    <Route path="note/:title" component={ShowNote} />
  </Route>
);
