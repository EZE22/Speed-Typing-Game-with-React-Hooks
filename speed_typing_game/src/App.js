import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
    const STARTING_TIME = 15
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [gameStart, setGameStart] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

    function startGame() {
        setGameStart(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setGameStart(false)
        setWordCount(calculateWordCount(text))
    }

    useEffect(() => {
        if(gameStart && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevState => prevState - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, gameStart])

    function handleChange(event){
        const {value} = event.target
        setText(value)
    }

    function calculateWordCount(words) {
        return words.split(" ").filter((word) => word !== "").length
    }

  return (
    <div>
        <h1>Speed Typing Game</h1>
        <textarea ref={textBoxRef} onChange={handleChange} value={text} disabled={!gameStart} />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick={startGame} disabled={gameStart}>Start</button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App;
