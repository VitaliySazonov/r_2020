import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
// const Context = React.createContext

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy meat" },
    { id: 3, completed: false, title: "Buy milk" }
  ]);
  function toggleTodo(id) {
    console.log(`Item_ID: ${id}`);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo=> todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
