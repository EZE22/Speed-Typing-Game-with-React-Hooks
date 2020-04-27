import React, {useState} from 'react';
import './App.css';

function App() {
    const [text, setText] = useState("Start Typing... ")

    function handleTextChange(event){
        const {value} = event.target
        setText(value)
    }

  return (
    <div>
        <h1>Speed Typing Game</h1>
        <textarea value={text} onChange={handleTextChange}/>
        <h4>Time Remaining</h4>
        <button>Start</button>
        <h1>Word Count</h1>
    </div>
  );
}

export default App;
