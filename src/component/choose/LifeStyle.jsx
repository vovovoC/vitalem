import '../../styles/button.scss'
import trueG from '../../images/bluechecked.svg'
import falseG from '../../images/blueunchecked.svg'
export default function LifeStyle(props){
    const{
        text,
        choose
    } = props
    return(
        <div className={choose==='allow'?'lifeStyle lg':'lifeStyle'}>
        <div className='row align-items-center'>
            <div className='col-10'>
                  <span>{text}</span>
            </div>
            <div className='col-2'>
                  <img src={
                      choose==='allow'? trueG : falseG
                  } alt='choose'/>
            </div>
        </div>
          </div>
    )
}
