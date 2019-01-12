import React, {PropTypes} from 'react';
import NoteListRow from "./NoteListRow";

const NoteList = ({notes}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Created On</th>
        </tr>
      </thead>
      <tbody>{
        notes.map(note => <NoteListRow key={note.id} note={note}/>)
      }</tbody>
    </table>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NoteList;
