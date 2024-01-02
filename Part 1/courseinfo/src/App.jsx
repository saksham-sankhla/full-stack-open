/* eslint-disable react/prop-types */
const App = () => {

  const courseinfo = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  
  const Header = (props) => {
    console.log('Header', props)
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    console.log('Part', props)
    return(
      <div>
        <p>{props.parts.name} {props.parts.exercise}</p>
      </div>
    )
  }

  const Content = (props) => {
   console.log('Content', props)
    return(
      <div>
        <Part parts={props.parts[0]}/>
        <Part parts={props.parts[1]}/>
        <Part parts={props.parts[2]}/>
      </div>
    )
  }
  
  const Total = (props) => {
    console.log('Total', props)
    return(
      <div>
        <p>Number of exercise {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
      </div>
    )
  }
  

  return (
    <div>
      <Header course={courseinfo.name} />
      <Content parts={courseinfo.parts} />
      <Total parts={courseinfo.parts} />
    </div>
  )
}

export default App