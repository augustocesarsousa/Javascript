import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// Tasks
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTesk: '',
    tasks: [],
    index: -1,
  };

  handleChance = (e) => {
    this.setState({
      newTesk: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTesk } = this.state;
    newTesk = newTesk.trim();

    if (tasks.indexOf(newTesk) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTesk],
        newTesk: '',
      });
    } else {
      newTasks[index] = newTesk;

      this.setState({
        tasks: [...newTasks],
        newTesk: '',
        index: -1,
      });
    }
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTesk: tasks[index],
    });
  }

  handleDelete = (e, index) => {
    e.preventDefault();
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  }

  render() {
    const { newTesk, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task List</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChance}
            type="text"
            value={newTesk}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
