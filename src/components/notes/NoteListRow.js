import React, {PropTypes} from 'react';
import {Link} from "react-router";
import {longToDate} from "../common/Util";

const NoteListRow = ({note}) => {
  return (
    <tr>
      <td scope="row"><Link to={'note/' + note.title}> {note.title} </Link></td>
      <td style={{maxHeight: '4em', display: 'block', overflow: 'hidden'}}>{note.content}</td>
      <td>{note.time?longToDate(note.time):''}</td>
    </tr>
  );
};

NoteListRow.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteListRow;
