const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (part) => {
  console.log(part)
  return (
    <>
      <p>
        {part.part.name} {part.part.exercises}
      </p>
    </>
  )
}

const Content = (parts) => {
  return (
    <div>
      <Part part={parts.parts[0]} />
      <Part part={parts.parts[1]} />
      <Part part={parts.parts[2]} />
    </div>
  )
}

const Total = (parts) => {
  return (
    <>
      <p>
      Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}
      </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App