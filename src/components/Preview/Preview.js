import React from 'react';
import './Preview.css';

export default function Preview({ name, head, body }) {
  return (
    <>
      <div className="character-preview">
        <h1>Character Preview</h1>
        <p key={name}>{name}</p>
        <div className="character-image-container">
          <img src={`/images/${head}.jpg`} alt={head} />
          <img src={`/images/${body}.png`} alt={body} />
          <img
            src="https://www.seekpng.com/png/detail/76-766707_close-legs-and-shoes-clipart.png"
            alt="legs"
          />
        </div>
      </div>
      <div className="character-catchphrases">
        <h1>Catchphrases</h1>
        <ul>
          {/* map through catch phrases and return li */}
          lorem ipsum dolor sit
        </ul>
      </div>
    </>
  );
}
