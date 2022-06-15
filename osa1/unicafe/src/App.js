import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text} </td>
        <td>{props.value} %</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{props.text} </td>
        <td>{props.value} </td>
      </tr>
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
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={good+neutral+bad} />
          <StatisticLine text="average" value ={parseFloat((1*good+0*neutral+(-1*bad))/(good+neutral+bad)).toFixed(1)} />
          <StatisticLine text="positive" value ={parseFloat(100*good/(good+neutral+bad)).toFixed(1)} />
        </tbody>
      </table>
    </div>
  )
}

export default App
