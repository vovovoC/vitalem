import '../../styles/button.scss'
export default function SearchCenter({searchName}){
    return(
        <input type='search' placeholder={searchName} className='searchCenter' />
    )
}
