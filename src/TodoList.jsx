import React from "react";

function TodoList({ todos, updateTodos }) {
  function handleToggleTodoStatus(id, completed) {
    const newTodos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed
            }
        }

        return todo;
    });

    updateTodos(newTodos);
  }

  function handledeleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    updateTodos(newTodos);
  }

  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleToggleTodoStatus(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => handledeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
