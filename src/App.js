import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from "./NotesList";
import AddNote from "./AddNote";

function getNewRandomId() {
  return parseInt(Math.random() * 1e5);
}

class App extends Component {

  state = {
    notes: []
  }

  addNote(content) {
    console.log("add note!", content);
    this.setState({
      notes: [...this.state.notes, {
        content,
        id: getNewRandomId()
      }]
    })
  }

  removeNote(id) {
    this.setState({
      notes: this.state.notes.filter((el) => el.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Notes!</h2>
        </div>
        <NotesList notes={this.state.notes} removeNote={this.removeNote.bind(this)} />
          <AddNote onAddNote={this.addNote.bind(this)} />
      </div>
    );
  }
}

export default App;
