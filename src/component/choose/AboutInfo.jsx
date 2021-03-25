import '../../styles/button.scss'
import trueG from '../../images/icon-tick.svg'
import falseG from '../../images/ColorBg.svg'
export default function AboutInfo(props){
    
    const{
        text,
        dis,
        choose
    } = props
    return(
        <div className={choose==='allow'?'lifeStyle backColor':'lifeStyle'}>
        <div className='row align-items-center'>
        <div className='col-1'>
                  <img src={
                      (choose==='allow' ||dis.length!==0 )? trueG : falseG
                  } alt='choose'/>
            </div>
            <div className='col-11'>
                  <span>{text}</span>
            </div>
        </div>
          </div>
    )
}

