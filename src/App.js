import React, {useState} from 'react'


const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteEditing, setNoteEditing] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    const setNote = {
      id: Math.random().toString(36).substr(2, 9),
      title: e.target.note.value,
      body: e.target.des.value
    };
    setNotes([...notes, setNote]);
    e.target.note.value = "";
    e.target.des.value = "";
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
  };

  const submitEdits = (event, idToEdit) => {
    event.preventDefault();
    const updatedNotes = notes.map((note) => {
      if (note.id === idToEdit) {
        return {
          id: note.id,
          title: event.target.note.value,
          body: event.target.des.value
        };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    setNoteEditing("");
  };

  return (
    <>
    <div className="App" id="box">
      <form onSubmit={addNote}>
        <input id="title" type="text" name="note" placeholder="Give a Title..." />
        <br />
        <br />
        <textarea id="body" type="text" name="des" placeholder="Provide a description..." maxLength="200" />
        <br />
        <br />
        <input type="Submit" />
      </form>
    
      {notes.map((note) => (
        <div key={note.id}>
          <ol>
          {note.id !== noteEditing ? (
            <div>
              {note.title} <span /> {note.body}
            </div>
          ) : (
            <form onSubmit={(e) => submitEdits(e, note.id)}>
              <input
                id="title"
                type="text"
                name="note"
                defaultValue={note.title}
              />
              <textarea
                id="body"
                type="text"
                name="des"
                placeholder="enter des"
              />
              <button type="Submit"> Submit Edits</button>
            </form>
          )}
          <button onClick={() => deleteNote(note.id)}>delete</button>
          <button onClick={() => setNoteEditing(note.id)}>edit</button>
          </ol>
        </div>
      ))}
    </div>
    <div id="msg"> <h3>This site can be viewed in mobile view only. </h3></div>
    </>
  );
};
 

export default App;
