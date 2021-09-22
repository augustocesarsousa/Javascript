import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// Tasks
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newState: '',
    tasks: [
      'Make coffee',
      'Drink water',
      'Study',
    ],
  };

  handleChance = (e) => {
    this.setState({
      newState: e.target.value,
    });
  }

  render() {
    const { newState, tasks } = this.state;
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

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
