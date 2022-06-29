const Total = (course) => {
  return (
    <>
      <p>
      Number of exercises {course.course.parts[0].exercises + course.course.parts[1].exercises + course.course.parts[2].exercises}
      </p>
    </>
  )
}

const Course = (course) => {

  const Header = (course) => {
    return (
      <>
        <h1>{course.course.course.name}</h1>
      </>
    )
  }

  const Content = (course) => {
    return (
      <div>
        {course.course.course.parts.map(function(part){
          return <Part part={part} key={part.id}/>
        })}
      </div>
    )
  }

  const Part = (part) => {
    return (
      <>
        <p>
          {part.part.name} {part.part.exercises}
        </p>
      </>
    )
  }

  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
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
        name: 'The fourth part',
        exercises: 44,
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