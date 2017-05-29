import React, { Component, PropTypes } from 'react';

class Note extends Component {

  static propTypes = {
    removeNote: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }

  onDelete() {
    console.log(this.props.id);
    this.props.removeNote(this.props.id);
  }

  render() {
    return (
      <li>
        <p className="note-content">{this.props.content}</p>
        <button onClick={this.onDelete.bind(this)} className="note-delete">x</button>
      </li>
    );
  }
}

export default Note;
