import { useEffect, useMemo, useState } from "react";

const COLORS = ["#e966a0", "#c084fc", "#f6c453", "#55c1ff", "#a4d96c"]; // örnek palet

const loadNotes = () => {
  try {
    const raw = localStorage.getItem("notes");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export default function App() {
  const [notes, setNotes] = useState(loadNotes);
  const [text, setText] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [q, setQ] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return notes;
    return notes.filter((n) => n.text.toLowerCase().includes(t));
  }, [notes, q]);

  const addNote = () => {
    const val = text.trim();
    if (!val) return;
    setNotes((prev) => [
      { id: crypto.randomUUID(), text: val, color, createdAt: Date.now() },
      ...prev,
    ]);
    setText("");
  };

  const removeNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="container">
      <h1>NotesApp</h1>

      <input
        className="search"
        placeholder="Search..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="composer">
        <textarea
          placeholder="Enter your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="row">
          <div className="colors">
            {COLORS.map((c) => (
              <button
                key={c}
                className={`color ${c === color ? "active" : ""}`}
                style={{ background: c }}
                onClick={() => setColor(c)}
                aria-label={`choose color ${c}`}
              />
            ))}
          </div>
          <button className="add" onClick={addNote} disabled={!text.trim()}>
            ADD
          </button>
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 && <p className="empty">No notes yet.</p>}
        {filtered.map((n) => (
          <div key={n.id} className="note" style={{ background: n.color }}>
            <div className="note-text">{n.text}</div>
            <button className="delete" onClick={() => removeNote(n.id)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
