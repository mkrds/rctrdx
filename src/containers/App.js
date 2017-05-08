import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <TaskList />
      </div>
    );
  }
}

export default App;
