import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  function persistData(todos: string[]) {
    localStorage.setItem('todos', JSON.stringify({todos}))
  }

  function handleAddTodos(newTodo: string) {
    console.log('newTodo', newTodo);
    if(!newTodo) return;
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newList = [...todos];
    newList.splice(index, 1);
    persistData(newList);
    return setTodos(newList);
    // const newList = todos.require
  }

  function handleEditTodo(index: number) {
    const valueToBeEdited = todos[index];
    setNewTodo(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    console.log('localStorage', localStorage);
    if (!localStorage) return;
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
    console.log(localTodos);
  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} newTodo={newTodo} setNewTodo={setNewTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App;
