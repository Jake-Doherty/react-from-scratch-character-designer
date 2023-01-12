import React from 'react';
import './Editor.css';

export default function Editor({ name, setName, head, setHead, body, setBody }) {
  const handleChange = (e) => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'head' && setHead(e.target.value);
    e.target.name === 'body' && setBody(e.target.value);
    // console.log(e.target.value);
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
        <select name="head" value={head} onChange={handleChange}>
          <option value="head1">Head 1</option>
          <option value="head2">Head 2</option>
          <option value="head3">Head 3</option>
        </select>
      </label>
      <label>
        Body:
        <select name="body" value={body} onChange={handleChange}>
          <option value="body1">Body 1</option>
          <option value="body2">Body 2</option>
          <option value="body3">Body 3</option>
        </select>
      </label>
      <label>
        Legs:
        <select></select>
      </label>
    </div>
  );
}
