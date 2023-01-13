import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Home.css';

export default function Home() {
  const [name, setName] = useState('Character Name');
  const [head, setHead] = useState('head1');
  const [body, setBody] = useState('body1');
  const [legs, setLegs] = useState('legs1');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);
  return (
    <main>
      <Editor
        name={name}
        setName={setName}
        head={head}
        setHead={setHead}
        body={body}
        setBody={setBody}
        legs={legs}
        setLegs={setLegs}
        headCount={headCount}
        setHeadCount={setHeadCount}
        bodyCount={bodyCount}
        setBodyCount={setBodyCount}
        legsCount={legsCount}
        setLegsCount={setLegsCount}
      />
      <Preview
        name={name}
        head={head}
        body={body}
        legs={legs}
        headCount={headCount}
        bodyCount={bodyCount}
        legsCount={legsCount}
      />
    </main>
  );
}
