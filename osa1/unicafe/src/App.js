import { useState } from 'react'

const Display = (props) => {
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.type === "all"){
    return (
      <div>
        {props.type} {props.status[0]+props.status[1]+props.status[2]}
      </div>
    )
  }
  if (props.type === "average"){
    return (
      <div>
        {props.type} {(1*props.status[0]+0*props.status[1]+(-1*props.status[2]))/(props.status[0]+props.status[1]+props.status[2])}
      </div>
    )
  }
  if (props.type === "positive"){
    return (
      <div>
        {props.type} {100*props.status[0]/(props.status[0]+props.status[1]+props.status[2])} %
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h3>statistics</h3>
      <Display text={"good"} value={good} />
      <Display text={"neutral"} value={neutral} />
      <Display text={"bad"} value={bad} />
      <Statistics type={"all"} status={[good, neutral, bad]}/>
      <Statistics type={"average"} status={[good, neutral, bad]}/>
      <Statistics type={"positive"} status={[good, neutral, bad]}/>
    </div>
  )
}

export default App
