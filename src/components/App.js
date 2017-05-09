import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
export default App;
