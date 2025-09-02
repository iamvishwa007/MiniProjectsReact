import React, { useState } from 'react'
import './App.css'
import Toggle from './components/togglecomp/Toggle.jsx';
import Counter from './components/countercomp/Counter.jsx';
import StopWatch from './components/stopwatchcomp/StopWatch.jsx';

function App() {
  const[theme,setTheme]=useState('light');
  return (
    <div className='body-ctn'>
      <header className='head-ctn'>
        <h1>React Mini Projects</h1>
        <Toggle setTheme={setTheme}/>
      </header>
      <main className={`main-ctn ${theme}`}>
      <fieldset className={`counter ${theme}`}>
        <legend>#1 Counter</legend>
        <Counter/>
      </fieldset>
      <fieldset className={`counter ${theme}`}>
        <legend>#2 StopWatch</legend>
        <StopWatch/>
      </fieldset>
       <fieldset className={`counter ${theme}`}>
        <legend>#2 StopWatch</legend>
      </fieldset>
      <fieldset className={`counter ${theme}`}>
        <legend>#2 StopWatch</legend>
      </fieldset>
      </main>
      <footer className='footer-ctn'>footer</footer>
    </div>
  )
}

export default App
