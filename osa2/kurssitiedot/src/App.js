const Course = ({course}) => {

  const Header = ({course}) => {
    return (
      <>
        <h2>{course.name}</h2>
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
  const courses = [
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1> Web development curriculum </h1>
      {courses.map(function(course){
        return <Course course={course} key={course.id}/>
      })}
    </div>
  )
}

export default App