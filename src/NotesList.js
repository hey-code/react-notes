import React, { Component, PropTypes } from 'react';
import Note from "./Note";

class NotesList extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
    removeNote: PropTypes.func.isRequired
  }

  render() {
    console.log("notes list props", this.props);
    return (
      <ul className="App-notes">
        {this.props.notes.map((note, i) => (
          <Note key={note.id} content={note.content} id={note.id} removeNote={this.props.removeNote} />
        ))}
      </ul>
    );
  }
}

export default NotesList;
