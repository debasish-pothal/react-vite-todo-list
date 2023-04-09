import { Fragment, useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (!localValue) {
      return [];
    }

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos((currentTodos) => {
      return [
        todo,
        ...currentTodos,
      ];
    });
  }

  function updateTodos(todos) {
    setTodos(todos);
  }

  return (
    <Fragment>
      <NewTodo addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      {todos.length > 0 ? <TodoList todos={todos} updateTodos={updateTodos} /> : <p>No Todos</p>}
    </Fragment>
  );
}

export default App;
