import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
export default function SaveRecovedPassword(){
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
        <div className='logo'>
           <img src={logo} alt='vitalem'/>
        </div>   
       
        <div className='bodyPart'>
        <Zoom>
        <div className='headingSignin'>
          <Heading name='Восстановление пароля'/>
        </div>
            <form>
                <InputPassword name='Придумайте новый пароль'/>
                <InputPassword name='Повторите пароль'/>
               <Link to='./infosaved'>
               <BlueButton name='Сохранить'/>
               </Link>
            </form>
        </Zoom>
        </div>
        </div>
    </div>
   </div>
    )
}
