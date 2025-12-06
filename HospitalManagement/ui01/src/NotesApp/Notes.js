import React, { useState } from "react";
import "./Notes.css";

function Notes() {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotesList([...notesList, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notesList.filter((_, i) => i !== index);
    setNotesList(updatedNotes);
  };

  return (
    <div className="container">
      <h1>Notes App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={addNote}>Add</button>
      </div>

      <div className="notes-container">
        {notesList.map((n, index) => (
          <div className="note" key={index}>
            <p>{n}</p>
            <button className="delete-btn" onClick={() => deleteNote(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;

/*******Features********/

/*Add notes
Delete notes
Clean UI
Beginner friendly
Works without database*/

/***************More Features?**********/

/*Edit Note
Search Notes
Save Notes in Local Storage
Dark Mode
Responsive UI
Notes with date/time
Notes app with React + Firebase*/
