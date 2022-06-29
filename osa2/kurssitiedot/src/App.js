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

  const Total = (course) => {

    let total = 0;
    course.course.course.parts.forEach(countSum);
    function countSum(item) {
      total += item.exercises;
    }

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
      <Total course={course}/>
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