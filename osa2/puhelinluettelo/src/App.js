import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [filterString, setFilterString] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
    }

    else{
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const PersonDisplay = ({person}) => {
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filter shown with <input value={filterString} onChange={handleFilterChange}/></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
            <PersonDisplay key={person.name} person={person} />
        )}
      </div>
    </div>
  )

}

export default App