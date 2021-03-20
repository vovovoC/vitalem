import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import {Zoom,Slide} from 'react-reveal';
export default function Signin(){
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
          <Heading name='Войти'/>
        </div>

            <form>
                <InputText name='Введите почту'/>
                <InputPassword name='Введите пароль'/>
                <BlueButton name='Войти'/>
            </form>
            <Link to='./recovePassword'>
            <SmallBlueLink link='Забыли пароль?'/>
            </Link>
        
        </Zoom>
        </div>
        <div className='signintoregister'>
       <Slide top>
      
          <p>
          Нет аккаунта? <Link>Пройдите регистрацию</Link>
          </p>
          <p>
            Получите доступ к онлайн сервису у Вашего врача
            или позвоните <a  href='tel:+77717627077'>+7 (771) 762 7077</a>
          </p>
          </Slide>
       </div>
     
      
        </div>
    </div>
   </div>
    )
}
