import React, { Component } from 'react';
import Note from "./Note";

class NotesList extends Component {
  render() {
    console.log("notes list props", this.props);
    return (
      <ul className="App-notes">
        {this.props.notes.map((note, i) => (
          <Note key={i} content={note} />
        ))}
        <Note />
      </ul>
    );
  }
}

export default NotesList;
