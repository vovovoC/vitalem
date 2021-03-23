export default function News(props){
    const{
        newsText,
        newsCategory,
        newsImage
    } = props
    return(
        <div className='news'>
            <div className='img'>
                    <img src={newsImage} alt='vitalem news'/>
            </div>
            <div className='text'>
                <span className='span'>{newsText}</span>
                <br/>
               <span className='p'>{newsCategory}</span>
            </div>
        </div>
    )
}