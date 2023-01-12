import React from 'react';
import './Preview.css';

export default function Preview() {
  return (
    <>
      <div className="character-preview">
        <h1>Character Preview</h1>
        <p>Character Name</p>
        <div className="character-image-container">
          <img src="https://yanksmannequins.com/1186/mannequin-head-h37.jpg" alt="head" />
          <img
            src="https://publicdomainvectors.org/tn_img/ryanlerch_pink_t-shirt.webp"
            alt="torso"
          />
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
