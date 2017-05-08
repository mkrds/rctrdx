
let todoId = 0;
export const addTodo = () => ({
  type: 'ADD_TODO',
  id: todoId,
});
export const toggleTodo = () => ({
  type: 'TOGGLE_TODO',
});
