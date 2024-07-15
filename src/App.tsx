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

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
