import React from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Home.css';

export default function Home() {
  return (
    <main>
      <Editor />
      <Preview />
    </main>
  );
}
