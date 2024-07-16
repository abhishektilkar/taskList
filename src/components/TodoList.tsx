import React from 'react';
import TodoCard from './TodoCard';

type TodoListProps = {
    todos: string[];
    handleDeleteTodo: (index: number) => void;
    handleEditTodo: (index: number) => void;
  };

const TodoList: React.FC<TodoListProps> = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} key={index} todoI={index}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
