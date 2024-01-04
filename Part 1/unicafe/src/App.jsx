/* eslint-disable react/prop-types */
import { useState } from 'react'

const StatisticsLine = ({text, value}) =>{
  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const sum = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * (-1)) / sum
  const positive = (good / sum) * 100

  if(sum === 0){
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given.</p>
      </div>
    )
  } else{
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
          <StatisticsLine text='Good' value={good} />
          <StatisticsLine text='Neutral' value={neutral} />
          <StatisticsLine text='Bad' value={bad} />
          <StatisticsLine text='Sum' value={sum} />
          <StatisticsLine text='Average' value={average} />
          <StatisticsLine text='Positive' value={`${positive}%`} />
          </tbody>
        </table>
      </div>
    )
  }
}

const Button = ({onClick, text}) =>{
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{
    setGood(good + 1)
  }

  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
  }

  const handleBadClick = () =>{
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App