import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  function persistData(todos: string[]) {
    localStorage.setItem("todos", JSON.stringify({ todos }));
  }

  function handleAddTodos(newTodo: string) {
    console.log("newTodo", newTodo);
    if (!newTodo) return;
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newList = [...todos];
    newList.splice(index, 1);
    persistData(newList);
    setTodos(newList);
  }

  function handleEditTodo(index: number) {
    const valueToBeEdited = todos[index];
    setNewTodo(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos).todos;
      setTodos(parsedTodos);
      console.log(parsedTodos);
    }
  }, []);

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} newTodo={newTodo} setNewTodo={setNewTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  );
}

export default App;
