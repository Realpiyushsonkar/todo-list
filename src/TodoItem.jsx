export function TodoItem({ completed, id, title, time, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <span className="todo-time">🕒 {time}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
