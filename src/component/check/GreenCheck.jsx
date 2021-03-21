import checked from '../../images/greenchecked.svg'
import unchecked from '../../images/greenunchecked.svg'
import '../../styles/button.scss'
function GreenCheck(props){
    const{
        text,
        choose
    } = props
    return(
        
        <div className='greenAllow'>
            <div className='row align-items-center'>
               <img src={
                      choose==='allow'? checked : unchecked
                  } alt='choose'/>   
                 <span>{text}</span>
        </div>
          </div>
    )
}
export default GreenCheck;