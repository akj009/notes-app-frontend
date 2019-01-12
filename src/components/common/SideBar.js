import React from 'react';
import {IndexLink, Link} from 'react-router';

const SideBar = () => {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Notes App</span>
      <nav className="mdl-navigation">
        <IndexLink className="mdl-navigation__link" to="/">Show all notes</IndexLink>
        <Link className="mdl-navigation__link" to="addnote">Add note</Link>
      </nav>
    </div>
  );
};

export default SideBar;
