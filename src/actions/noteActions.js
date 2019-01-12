import {getAllNotes, saveNote, updateOldNote, deleteOldNote} from '../api/NotesApi';
import {CREATE_NOTE_SUCCESS, DELETE_NOTE_SUCCESS, LOAD_NOTES_SUCCESS, UPDATE_NOTE_SUCCESS} from "./actionTypes";

export function saveNoteSuccess(saveNoteResponse, note) {
  return {
    type: CREATE_NOTE_SUCCESS, note
  };
}

export function createNote(note) {
  return (dispatch, getState) => {
    return saveNote(note)
      .then(saveNoteResponse => {
        dispatch(saveNoteSuccess(saveNoteResponse, note));
      });
  };
}

export function updateNoteSuccess(updateNoteResponse, note) {
  return {
    type: UPDATE_NOTE_SUCCESS, note
  };
}

export function updateNote(note) {
  return (dispatch, getState) => {
    return updateOldNote(note)
      .then(updateNoteResponse => {
        dispatch(updateNoteSuccess(updateNoteResponse, note));
      });
  };
}

export function deleteNoteSuccess(deleteNoteResponse, noteId) {
  return {
    type: DELETE_NOTE_SUCCESS, noteId
  };
}

export function deleteNote(noteId) {
  return (dispatch, getState) => {
    return deleteOldNote(noteId)
      .then(deleteNoteResponse => {
        dispatch(deleteNoteSuccess(deleteNoteResponse, noteId));
      });
  };
}

export function loadNotesSuccess(notes) {
  return {
    type: LOAD_NOTES_SUCCESS, notes
  };
}

export function loadNotes() {
  return function(dispatch) {
    return getAllNotes()
      .then(notes => {
        dispatch(loadNotesSuccess(notes));
      });
  };
}
