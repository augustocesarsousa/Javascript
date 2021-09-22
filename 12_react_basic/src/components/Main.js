import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

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

        <form action="#" className="form">
          <input
            onChange={this.handleChance}
            type="text"
            value={newState}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
