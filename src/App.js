import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from "./NotesList";
import AddNote from "./AddNote";

class App extends Component {

  state = {
    notes: [
      "first note",
      "second note",
      "lorem ipsum"
    ]
  }

  addNote(content) {
    console.log("add note!", content);
    this.setState({
      notes: [...this.state.notes, content]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Notes!</h2>
        </div>
          <NotesList notes={this.state.notes} />
          <AddNote onAddNote={this.addNote.bind(this)} />
      </div>
    );
  }
}

export default App;
