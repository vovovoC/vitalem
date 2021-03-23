import Heading from "../../component/heading/Heading"
import NavbarInside from "../../component/navbar/NavbarInside"
import img from '../../images/doctors.svg'
import {useHistory} from 'react-router-dom'
export default function ShareNews(){
    const {goBack} = useHistory()
    return(
    <div className='register'>
        <div className='row align-items-center justify-content-center'>
        <div className='col-12 container'>
        <div onClick={goBack}> <NavbarInside name='Новость' prof='df'/></div>      
                <div className='headingText'>
                <p className='dateP'>22 августа</p>
                <p className='heading'>Как снизить токсичность воздуха в домашних и офисных помещений?</p>
                </div>
                <img src={img} alt='vitalem news' className='imgNews'/>
                <div className='descNews'>  
                <span>
                В предыдущих статьях мы представили общие характеристики распространенных на сегодня диет и подробно обсудили низкожировую, низкоуглеводную, безглютеновую, средиземноморскую, кето- и палеодиеты, а также сыроедение - их преимущества и недостатки. Данная статья посвящена вегетарианской (или растительной) диете, при которой в пищу не принимаются мясные продукты.
                </span>
                </div>
        </div>
        </div>
    </div>
    )
}