import React, {PropTypes} from 'react';
import NoteListRow from "./NoteListRow";

const NoteList = ({notes, onClick, tableId}) => {
  return (
    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" id={tableId}>
      <thead>
        <tr>
          <th>Title</th>
          <th className={"mdl-data-table__cell--non-numeric"}>Content</th>
          <th onClick={onClick}>Created On</th>
        </tr>
      </thead>
      <tbody>{
        notes.map(note => <NoteListRow key={note.id} note={note}/>)
      }</tbody>
    </table>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  tableId: PropTypes.string.isRequired
};

export default NoteList;
