import TodoCard from "./TodoCard";

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits',
        'Eat more veggies'
    ];
  return (
    <ul className="main">
        {todos.map((todo, index) => {
            return (
                <TodoCard key={index}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
