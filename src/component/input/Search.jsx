import '../../styles/button.scss'
function Search({searchName}){
    return(
        <input type='search' placeholder={searchName} className='searchLeft'/>
    )
}
export default Search;