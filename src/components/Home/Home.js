import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Home.css';

export default function Home() {
  const [name, setName] = useState('Character Name');
  return (
    <main>
      <Editor name={name} setName={setName} />
      <Preview name={name} />
    </main>
  );
}
