export default function Card(props){
    const{
        imgNews,
        textNews,
        dateNews
    } = props
    return(
        <div className='card'>
            <img src={imgNews} alt={textNews}/>
            <span>{textNews}</span>
            <p>{dateNews}</p>
        </div>
    )
}