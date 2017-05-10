import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

function AddTodo(props) {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    props.dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

AddTodo = connect()(AddTodo);

export default AddTodo;
