import React, {PropTypes} from 'react';
import {TextInput, TextAreaInput} from '../common/FormComponents';
import {longToDate} from "../common/Util";

const NoteForm = ({note, onChange, onSave, populated, errors, onDelete}) => {
  return (
    <form>
      <div className="mdl-card__supporting-text">
      <TextInput
        name = "title"
        label = {"Title"}
        value = {note.title}
        onChange = {onChange}
        placeholder = {"Add note title"}
        errors = {errors.title}
        populated = {populated}
      />

      <TextAreaInput
        name = "content"
        label = {"Content"}
        value = {note.content}
        onChange = {onChange}
        placeholder = {"Add note content"}
        errors = {errors.content}
        populated = {populated}
      />

      <div className="mdl-textfield mdl-js-textfield">
        <label htmlFor="time">Creation Time</label>
          <input
            type="text"
            disabled="disabled"
            name="time"
            className="mdl-textfield__input"
            value={note.time?longToDate(note.time):''}
          />
      </div>
      </div>

      <div className="mdl-card__actions mdl-card--border">
      <button
        name={populated ? 'Update' : 'Save'}
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
        onClick={onSave}
      >{populated ? 'Update' : 'Save'}</button>

      <button
        name="Delete"
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect pull-right mdl-button--accent"
        onClick={onDelete}
        style={{backgroundColor: 'red'}}
      >Delete</button>
      </div>
    </form>
  );
};

NoteForm.propTypes = {
  note: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  populated: PropTypes.bool,
  errors: PropTypes.object,
  onDelete: PropTypes.func.isRequired
};

export default NoteForm;
