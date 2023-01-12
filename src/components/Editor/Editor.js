import React from 'react';
import './Editor.css';

export default function Editor({ name, setName }) {
  const handleChange = (e) => {
    e.target.name === 'name' && setName(e.target.value);
  };
  return (
    <div className="editor-container">
      <h1>Character Editor</h1>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Head:
        <select></select>
      </label>
      <label>
        Body:
        <select></select>
      </label>
      <label>
        Legs:
        <select></select>
      </label>
    </div>
  );
}
