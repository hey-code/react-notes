import React, { Component } from 'react';

class AddNote extends Component {

  state = {
    text: ""
  }

  onTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  onButtonClick() {
    const content = this.state.text;
    this.props.onAddNote(content);
  }

  render() {
    return (
      <div className="App-addnote">
        <label htmlFor="note">content:</label>
        <textarea id="note" onChange={this.onTextChange.bind(this)} />
        <button onClick={this.onButtonClick.bind(this)} >add</button>
      </div>
    );
  }
}

export default AddNote;
