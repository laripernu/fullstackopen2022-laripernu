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
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }

  else {
    return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.good+props.neutral+props.bad}</p>
        <p>average {(1*props.good+0*props.neutral+(-1*props.bad))/(props.good+props.neutral+props.bad)}</p>
        <p>positive {100*props.good/(props.good+props.neutral+props.bad)} %</p>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
