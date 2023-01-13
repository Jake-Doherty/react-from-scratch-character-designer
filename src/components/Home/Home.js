import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Home.css';

export default function Home() {
  const [name, setName] = useState('Derek Zoolander');
  const [head, setHead] = useState('head1');
  const [body, setBody] = useState('body1');
  const [legs, setLegs] = useState('legs1');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);
  const [catchPhrases, setCatchPhrases] = useState(['but why male models?']);
  return (
    <main className="Home" style={{ backgroundImage: `url(/images/fashion-runway.jpg)` }}>
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
        catchPhrases={catchPhrases}
        setCatchPhrases={setCatchPhrases}
      />
      <Preview
        name={name}
        head={head}
        body={body}
        legs={legs}
        headCount={headCount}
        bodyCount={bodyCount}
        legsCount={legsCount}
        catchPhrases={catchPhrases}
      />
    </main>
  );
}
