import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import { addTodo, toggleTodo } from '../actions/app';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onIncrement() {
    store.dispatch(increment());
  }
  render() {
    return (
      <div className="App">
        <TaskList />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
export default App;
