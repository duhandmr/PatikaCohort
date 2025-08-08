import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, onToggle, onDestroy, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(text.length, text.length);
    }
  }, [editing, text]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      const val = text.trim();
      if (val) onEdit(todo.id, val);
      setEditing(false);
    } else if (e.key === "Escape") {
      setText(todo.title); // vazgeç
      setEditing(false);
    }
  };

  const saveOnBlur = () => {
    const val = text.trim();
    if (editing) {
      if (val) onEdit(todo.id, val);
      setEditing(false);
    }
  };

  return (
    <li
      className={`${todo.completed ? "completed" : ""} ${
        editing ? "editing" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label onDoubleClick={() => setEditing(true)}>{todo.title}</label>
        <button className="destroy" onClick={() => onDestroy(todo.id)} />
      </div>

      <input
        ref={inputRef}
        className="edit"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        onBlur={saveOnBlur}
      />
    </li>
  );
}
