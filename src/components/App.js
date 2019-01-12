import React, {PropTypes} from 'react';
import Header from './common/Header';
import SideBar from "./common/SideBar";

class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
        <Header />
        <SideBar />
        <main className="mdl-layout__content mdl-color--grey-300">
          <div className="mdl-grid">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
