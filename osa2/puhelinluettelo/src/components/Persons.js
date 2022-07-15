const Persons = ({persons, filterString}) => {

    const PersonDisplay = ({person, filterString}) => {
      if (filterString === '') {
        return (
          <div>
            {person.name} {person.number}
          </div>
        )
      }
    
      else if (person.name.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
        return (
          <div>
            {person.name} {person.number}
          </div>
        )
      }
    }
  
    return (persons.map(person => 
      <PersonDisplay key={person.name} person={person} filterString={filterString}/>)
    )
}

export default Persons