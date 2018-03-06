import React, { Component } from 'react';
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
];

class App extends Component {
  constructor(props) {
    super();
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

  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTask
          tasks={this.state.tasks}
          createTask={this.createTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
