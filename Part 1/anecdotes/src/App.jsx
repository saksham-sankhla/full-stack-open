/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return(
    
      <button onClick={onClick}>{text}</button>
    
  )
}

const TopAnecdote = ({maxVotes, anecdotes, maxVotesIndex, vote}) =>{
  if(maxVotes === 0){
    return(
      <div>
        <h1>Anecdote with most votes!</h1>
        <p>No Votes Yet!</p>
      </div>
    )
  } else{
    return(
      <div>
        <h1>Anecdote with most votes!</h1>
        {anecdotes[maxVotesIndex]}
        {<p>This has {vote[maxVotesIndex]} votes</p>}
      </div>
      
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  console.log('selected anecdote', selected)

  const randomAnecdote = () =>{
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    console.log('random index', randomIndex)

    setSelected(randomIndex)
  }

  const triggerVote = () =>{
    const voteCopy = [...vote]
    voteCopy[selected] += 1
    setVote(voteCopy)
  }

  const maxVotes = Math.max(...vote)
  const maxVotesIndex = vote.indexOf(maxVotes)
  console.log(maxVotes)
  return (
    <div>
      <h1>Anecdote of the day!</h1>
      {anecdotes[selected]}
      <p>This anecdote has {vote[selected]} votes.</p>
      <Button onClick={triggerVote} text='Vote' />
      <Button onClick={randomAnecdote} text='Next Anecdote!' />
      <TopAnecdote maxVotes={maxVotes} anecdotes={anecdotes} maxVotesIndex={maxVotesIndex} vote={vote}/>
    </div>
  )
}

export default App