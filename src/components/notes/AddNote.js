import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import * as noteActions from '../../actions/noteActions';

class AddNote extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      note: {
        title: "",
        content: ""
      },
      error: ""
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    if(this.state.note.title && this.state.note.content) {
      this.props.dispatch(noteActions.createNote(this.state.note));
      this.context.router.push("/");
    } else {
      this.setState({error: "Note details were not entered!"});
    }
  }

  onTitleChange(event) {
    const note = this.state.note;
    note.title = event.target.value;
    this.setState({note: note});
  }

  onContentChange(event) {
    const note = this.state.note;
    note.content = event.target.value;
    this.setState({note: note});
  }

  render() {
    return (
      <div>
        <h1>Add Notes </h1>

          <div className="form-group">
            <label htmlFor="title">Note title:</label>
            <input
              type="text" className="form-control" id="title"
              placeholder="Add note title"
              onChange={this.onTitleChange}
              value={this.state.note.title}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Note content:</label>
            <input
              type="text" className="form-control" id="content"
              placeholder="Add note content"
              onChange={this.onContentChange}
              value={this.state.note.content}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2"
                  onClick={this.onClickSave}
                  value="Save">Save note
          </button>

      </div>
    );
  }
}

AddNote.propTypes = {
  dispatch: PropTypes.func.isRequired
};

AddNote.contextTypes = {
  router: PropTypes.object
};

export default connect()(AddNote);
