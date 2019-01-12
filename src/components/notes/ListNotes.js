import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import NoteList from './NoteList';
class ListNotes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      notes: []
    };
  }

  render() {
    const {notes} = this.props;
    return (
        <NoteList notes={notes}/>
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
