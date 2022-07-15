import axios from 'axios'
import { useState, useEffect} from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log("effect")
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled")
      setPersons(response.data)
    })
  }, [])
  
  

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

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={filterString} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString}/>
    </div>
  )
}

export default App