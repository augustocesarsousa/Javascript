import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  state = {
    newState: '',
  };

  handleChance = (e) => {
    this.setState({
      newState: e.target.value,
    });
  }

  render() {
    const { newState } = this.state;
    return (
      <div className="main">
        <h1>Task List</h1>

        <form action="#">
          <input onChange={this.handleChance} type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
