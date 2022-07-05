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

export default Course