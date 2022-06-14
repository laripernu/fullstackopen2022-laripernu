import { useState } from 'react'

const Display = (props) => {
  if (props.text === "positive"){
    return (
    <div>
      {props.text} {props.value} %
    </div>)
  }
  else{
    return (
    <div>
      {props.text} {props.value}
    </div>)
  }
  
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
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
      <Display text={"all"} value={good+neutral+bad} />
      <Display text={"average"} value={(1*good+0*neutral+(-1*bad))/(good+neutral+bad)} />
      <Display text={"positive"} value={100*good/(good+neutral+bad)} />
    </div>
  )
}

export default App
