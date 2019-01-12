import {
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
  LOAD_NOTES_SUCCESS,
  UPDATE_NOTE_SUCCESS
} from "../actions/actionTypes";

export default function noteReducer(state = [], action) {
  switch(action.type) {
    case LOAD_NOTES_SUCCESS:
      return action.notes;

    case CREATE_NOTE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.note)
      ];

    case UPDATE_NOTE_SUCCESS:
      return [
        ...state.filter(note => note.id !== action.note.id),
        Object.assign({}, action.note)
      ];

    case DELETE_NOTE_SUCCESS:
      return [
        ...state.filter(note => note.id !== action.noteId)
      ];

    default:
      return state;
  }
}
