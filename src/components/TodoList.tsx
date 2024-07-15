import React from 'react';
import TodoCard from './TodoCard';

type TodoListProps = {
  todos: string[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard key={index}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
