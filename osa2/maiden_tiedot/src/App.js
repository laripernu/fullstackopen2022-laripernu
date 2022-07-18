import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const SearchForm = (props) => {
  return (
    <form>
      find countries
      <input value={props.value} onChange={props.onChange}/>
    </form>
  )
}

const CountryDisplay = ({countries, filterString}) => {
  if (countries !== undefined) {

    const countryNames = []

    countries.forEach(element => {
      if (element.name.common.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
        countryNames.push(element.name.common)
      }
    })
    return (
      countryNames.map(name => (<div key={name}>{name}</div>))
    )
    }
  }



function App() {
  
  const [countries, setCountries] = useState([])
  const [filterString, setFilterString] = useState('')

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }

  useEffect(() => {
    console.log("effect")
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log("promise fulfilled")
      setCountries(response.data)
    })
  }, [])
  
  return (
    <div>
      <SearchForm value={filterString} onChange={handleFilterChange}/>
      <CountryDisplay countries={countries} filterString={filterString}/>
    </div>
  );
}

export default App;