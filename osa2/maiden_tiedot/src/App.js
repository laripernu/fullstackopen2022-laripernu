import { useState, useEffect } from 'react';
import axios from 'axios'
import SearchForm from './components/SearchForm';
import CountryDisplay from './components/CountryDisplay';

function App() {
  
  const [countries, setCountries] = useState([])
  const [filterString, setFilterString] = useState('')

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
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