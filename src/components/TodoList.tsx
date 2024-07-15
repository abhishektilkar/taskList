import React from 'react';
import TodoCard from './TodoCard';

type TodoListProps = {
    todos: string[];
    handleDeleteTodo: (index: number) => void;
  };

const TodoList: React.FC<TodoListProps> = ({ todos, handleDeleteTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard handleDeleteTodo={handleDeleteTodo} key={index}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
