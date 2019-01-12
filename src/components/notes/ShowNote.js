import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import * as noteActions from '../../actions/noteActions';
import {bindActionCreators} from "redux";
import NoteForm from "./NoteForm";

class ShowNote extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      note: Object.assign({}, this.props.note),
      errors: {},
      populated: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    if(this.state.populated) {
      return this.setState({populated: false});
    } else {
      if(this.state.note.title && this.state.note.content) {
        this.props.actions.updateNote(this.state.note);
        this.context.router.push("/");
      } else {
        this.setState({error: "Note details were not entered!"});
      }
    }
  }

  onChange(event) {
    const field = event.target.name;
    let note = Object.assign({}, this.state.note);
    note[field] = event.target.value;
    return this.setState({note: note});
  }

  onDelete(event) {
    event.preventDefault();
    this.props.actions.deleteNote(this.state.note.id);
    this.context.router.push("/");
  }

  render() {
    return (
      <div>
        <h1>{this.props.note.title}</h1>
        <NoteForm
          note={this.state.note}
          onSave={this.onSave}
          onChange={this.onChange}
          errors={this.state.errors}
          populated={this.state.populated}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

ShowNote.propTypes = {
  note: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ShowNote.contextTypes = {
  router: PropTypes.object
};

const getNoteByTitle = (notes, title) => {
  const note = notes.filter(note => note.title === title);
  if(note && note.length > 0) return note[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const noteTitle = ownProps.params.title;
  let note = {title: "", content: "", time: null};
  if(noteTitle) {
    note = getNoteByTitle(state.notes, noteTitle);
  }
  return {
    note: note
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(noteActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote);
