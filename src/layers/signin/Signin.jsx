import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import {Zoom,Slide} from 'react-reveal';
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import {login} from '../../api'

export default function Signin(){
  let history = useHistory()

  const [customerSignUp, setCustomerSignUp] = useState(
    { name: '', password: ''}
  );
    
  const changePhone = (e)=>{
    e.preventDefault();
    setCustomerSignUp({...customerSignUp,name: e.target.value})
  }

  const changePassword = (e)=>{
    e.preventDefault();
    setCustomerSignUp({...customerSignUp, password: e.target.value})
  }

  function log(e){
    e.preventDefault()
    login(customerSignUp.name, customerSignUp.password, function(res){
      if(res != undefined){
        history.push("./profile")
      }
    })
  }
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

            <form onSubmit={log}>
                <InputText placeholderText='Введите номер телефона' cb = {changePhone} nameV='name'/>
                <InputPassword placeholderText='Введите пароль' cb = {changePassword} nameV='password'/>
                
                {/* <Link to='./signin'> */}
                <div>
                  <BlueButton name='Войти' />
                </div>
                
                {/* </Link> */}
               
            </form>
            <Link to='./recovePassword'>
              <SmallBlueLink link='Забыли пароль?'/>
            </Link>
        
        </Zoom>
        </div>
        <div className='signintoregister'>
       <Slide top>
          <p>
          Нет аккаунта? <Link to='./register_step_1'>Пройдите регистрацию</Link>
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
