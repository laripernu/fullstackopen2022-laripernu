import { useState } from 'react'

/*Helper function for obtaining random int, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

function addPoint (points, i) {
  const copy = [...points]
  copy[i] += 1
  return copy
}

function findIndexOfMax(array) {
  let max;
  let indexOfMax;
  for (var i = 0; i < array.length; i++) {
    if (!max || array[i] > max) {
      max = array[i];
      indexOfMax = i;
    }
  }
  return indexOfMax;
}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  )
}

const VoteDisplay = (props) => {
  return (
    <div>
      has {props.points[props.i]} votes
    </div>
  )
}

const MostVotedDisplay = (props) => {
  return (
    <div>
      {props.anecdote}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]}
      <div>
        <VoteDisplay points={points} i={selected}/>
        <Button text={"vote"} handleClick={() => setPoints(addPoint(points, selected))}/>
        <Button text={"next anecdote"} handleClick={() => setSelected(getRandomInt(anecdotes.length))}/>
      </div>
      <h3>  
        Anecdote with most votes
      </h3>
      <MostVotedDisplay anecdote={anecdotes[findIndexOfMax(points)]} />
      <VoteDisplay points={points} i={findIndexOfMax(points)}/>
    </div>
  )
}

export default App