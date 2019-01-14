import React, {PropTypes} from 'react';
import {Link} from "react-router";
import {longToDate} from "../common/Util";

const NoteListRow = ({note}) => {
  return (
    <tr>
      <td><Link to={'note/' + note.title}> {note.title} </Link></td>
      <td className={"mdl-data-table__cell--non-numeric"} style={{whiteSpace: "normal"}}>{note.content}</td>
      <td style={{whiteSpace: "normal"}} data-value={note.time}>{note.time?longToDate(note.time):''}</td>
    </tr>
  );
};

NoteListRow.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteListRow;
