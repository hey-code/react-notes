import React, { Component, PropTypes } from 'react';

class Note extends Component {

  render() {
    return (
      <li>
        <p>{this.props.content}</p>
      </li>
    );
  }
}

export default Note;
