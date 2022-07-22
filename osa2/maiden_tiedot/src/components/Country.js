import LanguageList from './LanguageList';

const Country = (props) => {
    let currentCountry = null
    props.countries.forEach(element => {
      if (element.name.common === props.name) {
        currentCountry = element
      }
    })
  
    return(
      <div key={props.name}>
        <h1>{currentCountry.name.common}</h1>
        <p>capital {currentCountry.capital}</p>
        <p>area {currentCountry.area}</p>
        <LanguageList languages={currentCountry.languages}/>
        <img src={currentCountry.flags.png} alt={'The flag of'+currentCountry.name.common}/>
      </div>
    )
}

export default Country