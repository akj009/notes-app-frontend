import React, {PropTypes} from 'react';
import {TextInput} from '../common/FormComponents';
import {longToDate} from "../common/Util";

const NoteForm = ({note, onChange, onSave, populated, errors, onDelete}) => {
  return (
    <form>
      <TextInput
        name = "title"
        label = {"Title"}
        value = {note.title}
        onChange = {onChange}
        placeholder = {"Add note title"}
        errors = {errors.title}
        populated = {populated}
      />

      <TextInput
        name = "content"
        label = {"Content"}
        value = {note.content}
        onChange = {onChange}
        placeholder = {"Add note content"}
        errors = {errors.content}
        populated = {populated}
      />

      <div className="form-group">
        <label htmlFor="time">Creation Time</label>
        <div className="field">
          <input
            type="text"
            disabled="disabled"
            name="time"
            className="form-control"
            value={note.time?longToDate(note.time):''}
          />
        </div>
      </div>

      <button
        name={populated ? 'Update' : 'Save'}
        className={"btn btn-primary"}
        onClick={onSave}
        style={{width:'15%', minWidth:'150px'}}
      >{populated ? 'Update' : 'Save'}</button>

      <button
        name="Delete"
        className={"btn btn-danger float-right"}
        onClick={onDelete}
        style={{width:'15%', minWidth:'150px'}}
      >Delete</button>
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
