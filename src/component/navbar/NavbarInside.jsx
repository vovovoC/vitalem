import back from '../../images/back.svg'
import calendar from '../../images/calendar.svg'
import share from '../../images/share-icon.svg'
export default function NavbarInside({name,prof}){
    return(
       <div>
            <div className='navbar'>
            <div className='row align-items-center'>
                   <div className={(name==='Болезнь' || prof==='prof')?'none':'backButton'}>
                   <img src={back} alt='back'/>
                   </div>
                   <div className='centerText'>
                        <span>{name}</span>
                   </div>
                   <div className={name==='Болезнь'?'none':'calendar'}>
                        <img src={prof==='prof'?calendar:share} alt='calendar'/>
                   </div>
            </div>
        </div>
        <div className='hr'/>
       </div>
    )
}