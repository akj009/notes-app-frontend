import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import NoteList from './NoteList';
import {sortTable} from "../common/Util";
class ListNotes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tableId: "notes-table",
      notes: [],
      sorted: 'none'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    sortTable(this.state.sorted, this.state.tableId);
  }

  render() {
    const {notes} = this.props;
    return (
      <div>
        <NoteList notes={notes} onClick={this.onClick} tableId={this.state.tableId}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  };
}
ListNotes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ListNotes);
