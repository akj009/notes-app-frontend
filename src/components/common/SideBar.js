import React from 'react';
import {IndexLink, Link} from 'react-router';

const SideBar = () => {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Notes App</span>
      <nav className="mdl-navigation">
        <IndexLink className="mdl-navigation__link" to="/"><i className="material-icons">list</i> Show all notes</IndexLink>
        <Link className="mdl-navigation__link" to="addnote"><i className="material-icons">add</i> Add note</Link>
      </nav>
    </div>
  );
};

export default SideBar;
