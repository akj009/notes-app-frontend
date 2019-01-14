const serverURL = process.env.NOTES_API;

const getAllNotesEndpoint = `${serverURL}/notesapp/notes/`;
const addNoteEndpoint = `${serverURL}/notesapp/notes/add`;
const updateNoteEndpoint = `${serverURL}/notesapp/notes/update`;
const deleteNoteEndpoint = `${serverURL}/notesapp/notes/delete/{id}`;

export const getAllNotes = () => {
  return new Promise((resolve) => {
    window.fetch(getAllNotesEndpoint)
      .then(res => res.json())
      .then(response => resolve(response))
      .catch((error) => {
        throw(error);
      });
  });
};

export const saveNote = ({title, content}) => {
  return new Promise(resolve => {
    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title": title,
        "content": content
      })
    };
    window.fetch(addNoteEndpoint, options)
      .then(res => res.text)
      .then(res => resolve(res))
      .catch(err => {
        throw(err);
      });
  });
};

export const updateOldNote = ({id, title, content}) => {
  return new Promise(resolve => {
    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "id": id,
        "title": title,
        "content": content
      })
    };
    window.fetch(updateNoteEndpoint, options)
      .then(res => res.text)
      .then(res => resolve(res))
      .catch(err => {
        throw(err);
      });
  });
};

export const deleteOldNote = (id) => {
  return new Promise(resolve => {
    let options = {
      method: 'DELETE'
    };

    let deleteEndpoint  = deleteNoteEndpoint.replace('{id}', id);
    window.fetch(deleteEndpoint, options)
      .then(res => res.text)
      .then(res => resolve(res))
      .catch(err => {
        throw(err);
      });
  });
};
