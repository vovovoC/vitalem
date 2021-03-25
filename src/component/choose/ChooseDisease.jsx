import '../../styles/button.scss'
import trueG from '../../images/bluechecked.svg'
import falseG from '../../images/blueunchecked.svg'
export default function ChooseDisease(props){  
    const{
        text,
        choose
    } = props
    return(
        <div className='disChoose'>
        <div className='row align-items-center'>
        <div className='col-2'>
                  <img src={
                      (choose==='allow')? trueG : falseG
                  } alt='choose'/>
            </div>
            <div className='col-10'>
                  <span>{text}</span>
            </div>
        </div>
          </div>
    )
}