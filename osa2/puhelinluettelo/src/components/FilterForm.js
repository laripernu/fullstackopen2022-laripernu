const FilterForm = (props) => {
    return (
        <form>
        filter shown with 
        <input value={props.value} onChange={props.onChange}/>
        </form>
    )
}

export default FilterForm