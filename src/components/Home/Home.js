import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Home.css';

export default function Home() {
  const [name, setName] = useState('Character Name');
  const [head, setHead] = useState('head1');
  return (
    <main>
      <Editor name={name} setName={setName} head={head} setHead={setHead} />
      <Preview name={name} head={head} />
    </main>
  );
}
