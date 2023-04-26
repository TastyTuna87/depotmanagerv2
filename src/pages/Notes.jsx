import React from "react";
import { useState, useEffect } from "react";
import { CardList } from "../components/CardList";
import SearchBar from "../components/SearchBar";

export const Notes = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notesList, setNotesList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(notesList));
  }, [notesList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotesList((currentNote) => {
      return [
        ...currentNote,
        { id: crypto.randomUUID(), title: title, note: note, completed: false },
      ];
    });
    setNote("");
    setTitle("");
  };
  const deleteNote = (id) => {
    setNotesList((currentNote) => {
      return currentNote.filter((note) => note.id !== id);
    });
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredNotes = notesList.filter((note) => {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Notes</h1>
      <div className="input-container">
        <form className="note-form" onSubmit={handleSubmit}>
          <label className="note-label" htmlFor="">
            Notes:
            <input
              className="input"
              type="text"
              value={title}
              name="name"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="text-area"
              name=""
              id=""
              cols="30"
              rows="10"
              value={note}
              placeholder="Note..."
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </label>
          <input
            className="submit-input"
            type="submit"
            value="Add"
            disabled={!title || !note}
          />
        </form>
      </div>
      <div className="searchbar-container">
        <SearchBar searchChange={handleSearch} />
      </div>
      <div>
        <CardList
          cards={filteredNotes}
          setCards={setNotesList}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
