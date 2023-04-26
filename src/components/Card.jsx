import React, { useEffect, useState } from "react";

export const Card = ({ title, note, id, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotesList((currentNote) => {
      return currentNote.map((note) => {
        if (note.id === id) {
          return { ...note, note: editedNote };
        }
        return note;
      });
    });

    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmDelete) {
      deleteNote(id);
    }
  };
  return (
    <div className="card">
      <div className="close-btn" onClick={handleDelete}></div>
      <h3>{title}</h3>
      {isEditing ? (
        <textarea
          className="note-input"
          type="text"
          value={editedNote}
          onChange={(e) => setEditedNote(e.target.value)}
        />
      ) : (
        <p className="note-p">{note}</p>
      )}
      <div className="edit-btn">
        <input
          className="card-edit-btn"
          type="submit"
          value={isEditing ? "Save" : "Edit"}
          onClick={() => setIsEditing(!isEditing)}
        />
      </div>
    </div>
  );
};
