import React from 'react';
import './Preview.css';

export default function Preview({
  name,
  head,
  body,
  legs,
  headCount,
  bodyCount,
  legsCount,
  catchPhrases,
}) {
  return (
    <>
      <div className="character-preview">
        <h1>Character Preview</h1>
        <p key={name}>{name}</p>
        <div className="character-image-container">
          <img src={`/images/${head}.jpg`} alt={head} />
          <img src={`/images/${body}.png`} alt={body} />
          <img src={`/images/${legs}.png`} alt={legs} />
        </div>
      </div>
      <div className="character-count-catchphrases">
        <h1>Catchphrases & Stats</h1>
        <ul className="character-catchphrases">
          {/* map through catch phrases and return li */}
          {catchPhrases.map((phrase, i) => {
            i += 1;
            return (
              <li id={i} key={i}>
                {phrase}
              </li>
            );
          })}
        </ul>
        <div className="selection-count">
          <p className="head-count">Head has been selected {headCount} times.</p>
          <p className="body-count">Body has been selected {bodyCount} times.</p>
          <p className="legs-count">Legs has been selected {legsCount} times.</p>
        </div>
      </div>
    </>
  );
}
