import back from '../../images/back.svg'
export default function RegisterNavbar({name}){
    return(
       <div>
            <div className='navbar'>
            <div className='row align-items-center'>
                   <div className='backButton'>
                   <img src={back} alt='back'/>
                   </div>
                   <div className='centerText'>
                        <span>{name}</span>
                   </div>
            </div>
        </div>
        <div className='hr'/>
       </div>
    )
}