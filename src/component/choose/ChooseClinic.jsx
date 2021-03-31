import '../../styles/button.scss'
import trueG from '../../images/bluechecked.svg'
import falseG from '../../images/blueunchecked.svg'
import {Link} from 'react-router-dom'
export default function Choose(props){
    
    const{
        text,
        dis,
        image,
        choose
    } = props
    return(
        <div className={choose==='allow'?'lifeStyle lg':'lifeStyle'}>
        <div className='row align-items-center'>
            <div className='col-3'>
                <img src={image} alt={text}/>
            </div>
            <div className='col-3'>
                  <span>{text}</span>
            </div>

            <div className='col-4'></div>
            <div className='col-2'>
                  <img src={
                      (choose==='allow' ||dis.length!==0 )? trueG : falseG
                  } alt='choose'/>
            </div>
        </div>
          </div>
    )
}