import React from 'react';
import './Editor.css';

export default function Editor() {
  return (
    <div className="editor-container">
      <h1>Character Editor</h1>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
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
