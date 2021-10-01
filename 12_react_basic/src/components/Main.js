import React, { Component } from 'react';

import Form from './Form';
import Tasks from './Tasks';

import './Main.css';

export default class Main extends Component {
  state = {
    newTesk: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

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

        <Form
          handleSubmit={this.handleSubmit}
          handleChance={this.handleChance}
          newTesk={newTesk}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
