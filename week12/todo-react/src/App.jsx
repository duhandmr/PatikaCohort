import { useEffect, useMemo, useState } from "react";
import TodoItem from "./components/TodoItem.jsx";

const FILTERS = {
  all: () => true,
  active: (t) => !t.completed,
  completed: (t) => t.completed,
};

export default function App() {
  const [todos, setTodos] = useState(() => [
    { id: crypto.randomUUID(), title: "Learn JavaScript", completed: true },
    { id: crypto.randomUUID(), title: "Learn React", completed: false },
    { id: crypto.randomUUID(), title: "Have a life!", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  // Hash tabanlı filtre (TodoMVC linkleriyle uyumlu)
  useEffect(() => {
    const applyFilterFromHash = () => {
      const h = window.location.hash.replace("#/", "");
      if (h === "active" || h === "completed") setFilter(h);
      else setFilter("all");
    };
    applyFilterFromHash();
    window.addEventListener("hashchange", applyFilterFromHash);
    return () => window.removeEventListener("hashchange", applyFilterFromHash);
  }, []);

  const leftCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );
  const visibleTodos = useMemo(
    () => todos.filter(FILTERS[filter]),
    [todos, filter]
  );
  const allCompleted = todos.length > 0 && leftCount === 0;

  const addTodo = (e) => {
    e.preventDefault();
    const title = newTodo.trim();
    if (!title) return;
    setTodos((prev) => [
      { id: crypto.randomUUID(), title, completed: false },
      ...prev,
    ]);
    setNewTodo("");
  };

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const destroy = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const edit = (id, title) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title } : t)));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const toggleAll = () => {
    const next = !allCompleted;
    setTodos((prev) => prev.map((t) => ({ ...t, completed: next })));
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addTodo}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </form>
        </header>

        <section className="main">
          {/* Toggle all ile CSS uyumu için input + label yapısı korundu */}
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={allCompleted}
            onChange={toggleAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {visibleTodos.map((t) => (
              <TodoItem
                key={t.id}
                todo={t}
                onToggle={toggle}
                onDestroy={destroy}
                onEdit={edit}
              />
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{leftCount}</strong> items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className={filter === "all" ? "selected" : ""}>
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                className={filter === "active" ? "selected" : ""}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                className={filter === "completed" ? "selected" : ""}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}
