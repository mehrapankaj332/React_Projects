import React from "react";
import './TodoList.css'
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="alltodos">
      {todos.map((t) => (
        <li className="singletodo">
          <span className="todotext" key={t.id}>
            {t.todo}
          </span>
          <button className="btn" onClick={() => handleEdit(t.id)}>Edit</button>
          <button className="btn" onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;