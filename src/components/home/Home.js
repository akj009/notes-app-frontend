import React from "react";
import ListNotes from "../notes/ListNotes";

class Home extends React.Component {
  render() {
    return (
      <div className="mdl-grid ">
        <ListNotes/>
      </div>
    );
  }
}

export default Home;
