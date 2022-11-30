import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DeeplegalLogo from '../assets/deeplegal-logo.png';
import DeeplegalLogoMain from '../assets/deeplegal-logo-main.png';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
      <Image src={DeeplegalLogoMain} alt="deeplegal logo main" />
        <title> DeepLegal.io </title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>DeepLegal AI Lawyer</h1>
          </div>
          <div className="header-subtitle">
            <h2>Use the power of AI to answer your legal questions, chat to DeepLegal AI Lawyer free! </h2>
          </div>
          <div className="header-subtitle">
            <h2>Are you in the USA? Head to <a>DeepLegal.io/US-law</a> </h2>
          </div>
        </div>
        <div className="prompt-container">
        <textarea
  className="prompt-box"
  placeholder="start typing here"
  value={userInput}
  onChange={onUserChangedText}
/>
<div className="prompt-buttons">
<a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span class="loader"></span> : <p>Generate</p>}
    </div>
  </a>
  </div>
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="_blank"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={DeeplegalLogo} alt="deeplegal logo" />
            <p>Disclaimer: Prototype, Not legal advice</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
