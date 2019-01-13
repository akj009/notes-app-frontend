import React from 'react';

const Header = () => {
  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <div className="mdl-layout-spacer"> </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                mdl-textfield--floating-label mdl-textfield--align-right">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" name="search" id="search" onKeyPress={handleSearch}/>
          </div>
        </div>
      </div>
    </header>
  );
};

const handleSearch = (event) => {
  let keyCode = event.which || event.keyCode;
  if (keyCode === 13) {
    let tableRows$ = $('table tbody tr');
    tableRows$.hide();
    let searchTerm = event.target.value;
    tableRows$.filter(':contains(' + searchTerm + ')').show();
    return false;
  }
};

export default Header;
