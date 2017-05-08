import React from 'react';

function TaskList(props) {
  return (
    <div className="App">
      <h1>{props.value}</h1>
    </div>
  );
}

export default TaskList;
