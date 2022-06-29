const Course = ({course}) => {

  const Header = ({course}) => {
    return (
      <>
        <h1>{course.name}</h1>
      </>
    )
  }

  const Content = ({course}) => {
    return (
      <div>
        {course.parts.map(function(part){
          return <Part part={part} key={part.id}/>
        })}
      </div>
    )
  }

  const Part = ({part}) => {
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    )
  }

  const Total = ({parts}) => {
    
    const exercise_counts = parts.map(element => element.exercises)
    
    const total = exercise_counts.reduce( (accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    return (
      <>
        <b>
          total of {total} exercises
        </b>
      </>
    )
  }

  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total parts={course.parts}/>
    </>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App