import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)

    useEffect(() => {
        if(timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevState => prevState - 1)
            }, 1000)
        }
    }, [timeRemaining])

    function handleTextChange(event){
        const {value} = event.target
        setText(value)
    }

    function calculateWordCount(words) {
        return words.split(" ").filter((word) => word !== "").length
    }

  return (
    <div>
        <h1>Speed Typing Game</h1>
        <textarea value={text} onChange={handleTextChange}/>
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
        <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;
