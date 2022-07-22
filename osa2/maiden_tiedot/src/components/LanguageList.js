const LanguageList = (props) => {
    return (
        <div>
            languages: 
            <ul>
                {Object.values(props.languages).map(lan => <li key={lan}>{lan}</li>)}
            </ul>
        </div>
    )
}

export default LanguageList