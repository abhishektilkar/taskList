import { useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits',
    'Eat more veggies'
  ]);

  function handleAddTodos(newTodo: string) {
    console.log('newTodo', newTodo);
    if(!newTodo) return;
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(index: number) {
    if (index > -1 && index < todos.length) {
      const newList = [...todos];
      newList.splice(index, 1);
      return setTodos(newList);
    }
    // const newList = todos.require
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App;
