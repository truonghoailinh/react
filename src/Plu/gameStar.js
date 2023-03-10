// import { time } from 'console';
import React, {useEffect, useState} from 'react'


const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue'
}
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  random: (min, max) => min + Math.floor(max * Math.random()),

  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < sets.length; j++) {
        const candidateSet = sets[j].concat(arr[i])
        const candidateSum = utils.sum(candidateSet)
        if (candidateSum <= max) {
          sets.push(candidateSet)
          sums.push(candidateSum)
        }
      }
    }
    return sums[utils.random(0, sums.length)]
  }
}

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId => 
      <div key={starId} className="stars" style={{
        width: '70px',
        height: '70px',
        marginBottom: '20px',
        backgroundColor: colors.available
      }}></div>  
    )}
  </>
)
const PlayAgian = props => (
  <div className="game-done">
    <div className="message" style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}}>
      {props.gameStatus === 'lost' ? 'Game over': 'Nice'}
    </div>
    <button onClick={props.onClick}>
      Play Again
    </button>
  </div>
)
const PlayNumber = props => (
  <button className="number" style={{ 
    width: '70px',
    height: '70px',
    backgroundColor: colors[props.status]
  }} onClick={() => props.onClick(props.number, props.status)}>{props.number}</button>
)

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9))
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
  const [candidateNums, setCandidateNums] = useState([])
  const [secondsLeft, setSecondsLeft] = useState(10)
  
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timeID = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)
      return () => clearTimeout(timeID)
    }
  })
  const setGameState = (newCandidateNumber) => {
    if (utils.sum(newCandidateNumber) !== stars) {
      setCandidateNums(newCandidateNumber)
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNumber.includes(n)
      )
      setStars(utils.randomSumIn(newAvailableNums, 9))
      setAvailableNums(newAvailableNums)
      setCandidateNums([])
    }
  }
  return { stars, availableNums, candidateNums, secondsLeft, setGameState }
}
const Game = (props) => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState()
  const candidateAreWrong = utils.sum(candidateNums) > stars
  const gameStatus = availableNums.length === 0 
  ? 'won'
  : secondsLeft === 0 ? 'lost' : 'active'

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used'
    }
    if (candidateNums.includes(number)) {
      return candidateAreWrong ? 'wrong': 'candidate'
    }
    return 'available'
  }

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }
    const newCandidateNumber = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number)
    setGameState(newCandidateNumber)
  }

  return (
    <div className="game">
      <div className="help" style={{marginBottom: '30px'}}>
        Pick 1 or more number that sum to the number of square
      </div>
      <div className="body" style={{ display: 'flex', width: '500px' }}>
        <div className="left" style={{ 
          display: 'flex', flexWrap: 'wrap', width: '50%' , justifyContent: 'space-between'
          }}>
            {gameStatus !=='active' ? (<PlayAgian onClick={props.startNewGame} gameStatus={gameStatus}/>) : (<StarsDisplay count={stars} />)}
        </div>
        <div className="right" style={{ width: '50%' }}>
        {utils.range(1, 9).map(number => 
          <PlayNumber key={number} status={numberStatus(number)} number={number} onClick={onNumberClick} />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  )
}
const StartMatch = () => {
  const [gameId, setGameId] = useState(1)
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
}
export default StartMatch