const SearchForm = (props) => {
    return (
      <form>
        find countries
        <input value={props.value} onChange={props.onChange}/>
      </form>
    )
  }

  export default SearchForm