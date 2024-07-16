import React from 'react';

export default function TodoInput(props: { handleAddTodos: (todo: string) => void; newTodo: string; setNewTodo: (todo: string) => void;}) {
  const { handleAddTodos, newTodo, setNewTodo } = props;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddClick = () => {
    handleAddTodos(newTodo);
    setNewTodo(""); // Clear the input field after adding the todo
  };

  return (
    <header>
      <input
        value={newTodo}
        onChange={handleChange}
        placeholder="Enter todo ..."
      />
      <button onClick={handleAddClick}>Add</button>
    </header>
  );
}
