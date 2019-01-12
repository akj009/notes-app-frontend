import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
