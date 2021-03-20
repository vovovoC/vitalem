import '../../styles/button.scss'
export default function Heading({name}){
    return(
        <div className='headingDivDisplay'>
            <p className='heading'>{name}</p>
        </div>
    )
}