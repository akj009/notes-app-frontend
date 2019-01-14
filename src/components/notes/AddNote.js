import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import * as noteActions from '../../actions/noteActions';

/*eslint-disable no-undef */

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

  componentDidMount() {
    if(typeof componentHandler !== "undefined") {
      componentHandler.upgradeAllRegistered();
    }
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
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--1-col"> </div>
        <div className="mdl-cell mdl-cell--10-col mdl-card">
          <div className="mdl-card__title mdl-card--border">
            <h2 className="mdl-card__title-text">Add Notes </h2>
          </div>
          <div className="mdl-card__supporting-text">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                  type="text" className="mdl-textfield__input" id="title"
                  onChange={this.onTitleChange}
                  value={this.state.note.title}
                />
                <label className="mdl-textfield__label" htmlFor="title">Add note title</label>
              </div>

              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <textarea
                  type="text" className="mdl-textfield__input" id="content"
                  rows="4"
                  onChange={this.onContentChange}
                  value={this.state.note.content}
                />
                <label className="mdl-textfield__label" htmlFor="content">Add note content</label>
              </div>
            </form>
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
                    onClick={this.onClickSave}
                    value="Save">Save note
            </button>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--1-col"> </div>
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
