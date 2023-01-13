import React from 'react';
import { useState } from 'react';
import './Editor.css';

export default function Editor({
  name,
  setName,
  head,
  setHead,
  body,
  setBody,
  legs,
  setLegs,
  headCount,
  setHeadCount,
  bodyCount,
  setBodyCount,
  legsCount,
  setLegsCount,
  catchPhrases,
  setCatchPhrases,
}) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'head' &&
      setHead(
        e.target.value,
        setHeadCount(() => {
          return headCount + 1;
        })
      );
    e.target.name === 'body' &&
      setBody(
        e.target.value,
        setBodyCount(() => {
          return bodyCount + 1;
        })
      );
    e.target.name === 'legs' &&
      setLegs(
        e.target.value,
        setLegsCount(() => {
          return legsCount + 1;
        })
      );
  };
  const handleClick = () => {
    // console.log(inputValue);
    if (inputValue === '') {
      return alert('Please enter a catch phrase');
    } else {
      setCatchPhrases((currentPhrases) => [...currentPhrases, inputValue]);
      setInputValue('');
    }
  };
  return (
    <div className="editor-container">
      <h1>Character Editor</h1>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" placeholder={name} onChange={handleChange} />
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
        <select name="legs" value={legs} onChange={handleChange}>
          <option value="legs1">Legs 1</option>
          <option value="legs2">Legs 2</option>
          <option value="legs3">Legs 3</option>
        </select>
      </label>
      <input
        type="text"
        value={inputValue}
        placeholder={catchPhrases[0]}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Add Catch Phrase</button>
    </div>
  );
}
