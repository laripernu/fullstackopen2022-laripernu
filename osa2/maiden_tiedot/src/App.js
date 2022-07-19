import { useState, useEffect } from 'react';
import axios from 'axios'

const SearchForm = (props) => {
  return (
    <form>
      find countries
      <input value={props.value} onChange={props.onChange}/>
    </form>
  )
}

const Country = (props) => {
  let currentCountry = null
  props.countries.forEach(element => {
    if (element.name.common === props.name) {
      currentCountry = element
    }
  })
  console.log(currentCountry)
  // TODO: finish the country details listings
  return(
    <div key={props.name}>
      <h1>{currentCountry.name.common}</h1>
      <p>capital {currentCountry.capital}</p>
      <p>area</p>
      <p>languages: </p>
      <img src={currentCountry.flags.png}/>
    </div>
  )
}

const CountryDisplay = ({countries, filterString}) => {

  const countryNames = []

  countries.forEach(element => {
    if (element.name.common.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
      countryNames.push(element.name.common)
    }
  })

  console.log(countryNames)

  if (countryNames.length === 1) {
    return (<Country countries={countries} name={countryNames[0]}/>)
  }
  else if (countryNames.length >= 10) {
    // TODO: change this to not show when filterString is EMPTY
    return (
      <div>
        Too many countries
      </div>
    )
  }
  else {
    return(
      countryNames.map(element => <div>{element}</div>)
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