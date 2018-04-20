import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

class TextInput extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange}/>
      </div>
    );
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }
}

export default TextInput;
