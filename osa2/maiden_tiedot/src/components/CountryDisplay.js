import Country from "./Country"

const CountryDisplay = ({countries, filterString}) => {

    const countryNames = []
  
    countries.forEach(element => {
      if (element.name.common.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
        countryNames.push(element.name.common)
      }
    })
  
    if (countryNames.length === 1) {
      return (<Country countries={countries} name={countryNames[0]}/>)
    }
    else if (filterString === '') {
      return (<></>)
    }
    else if (countryNames.length >= 10) {
      return (
        <div>
          Too many countries
        </div>
      )
    }
    else {
      return(
        countryNames.map(element => <div key={element}>{element}</div>)
      )
    }
}

export default CountryDisplay