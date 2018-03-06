import React, { Component } from 'react';
import TaskList from './components/task-list';
import CreateTask from './components/create-task';

const tasks = [
  {
    task: 'complete React Tutorial',
    isCompleted: false
  },
  {
    task: 'read a book',
    isCompleted: true
  },
  {
    task: 'Wash Car',
    isCompleted: false
  },

];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks
    };
  }

  createTask(task) {
    this.state.tasks.push({
      task,
      isCompleted: false
    });
    this.setState({ tasks: this.state.tasks })
  }

  toggleTask(task) {
    let t = this.state.tasks;
    const foundTask = t.find(tsk => tsk.task === task)
    foundTask.isCompleted = !foundTask.isCompleted;
    this.setState({ tasks: this.state.tasks });

  }

  saveTask(oldTask, newTask) {
    let t = this.state.tasks;
    const foundTask = t.find(tsk => tsk.task === oldTask)
    foundTask.task = newTask;
    this.setState({ tasks: this.state.tasks })
  }

  deleteTask(taskToDelete) {
    let t = this.state.tasks;
    const foundTask = t.find(tsk => tsk.task === taskToDelete)
    t.remove(foundTask);
    this.setState({ tasks: this.state.tasks });
  }

  render() {
    return (
      <div>
        <h1> React ToDos App</h1>
        <CreateTask
          tasks={this.state.tasks}
          createTask={this.createTask.bind(this)}
        />
        <TaskList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>

    );
  }
}