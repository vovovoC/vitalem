import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import {login} from '../../api'
import InputPhone from '../../component/input/InputPhone'

export default function Signin({path}){
  let history = useHistory()

  const [customerSignUp, setCustomerSignUp] = useState(
    { phone: '', password: ''}
  );
    
  const changePhone = (e)=>{
    e.preventDefault();
    setCustomerSignUp({...customerSignUp,name: e.target.value})
  }

  const changePassword=(e)=>{
    e.preventDefault();
    setCustomerSignUp({...customerSignUp, password: e.target.value})
  }

  function log(e){
    e.preventDefault()
    login(customerSignUp.phone, customerSignUp.password, function(res){
      if(res !== undefined || res !== 'undefined'){
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
            
            <div className='headingSignin'>
              <Heading name='Войти'/>
            </div>
            <form onSubmit={log}>
                <InputPhone placeholderText='Введите номер телефона' cb = {(e)=>{changePhone(e)}} nameV='phone'/>
                <InputPassword placeholderText='Введите пароль' cb = {(e)=>{changePassword(e)}} nameV='password'/>
                <div>
                  <BlueButton name='Войти' />
                </div>
            </form>
            <Link to={`./recovePassword`}>
              <SmallBlueLink link='Забыли пароль?'/>
            </Link>
        </div>
        <div className='signintoregister'>
          <p>
          Нет аккаунта? <Link to='./register'>Пройдите регистрацию</Link>
          </p>
          <p>
            Получите доступ к онлайн сервису у Вашего врача
            или позвоните <a  href='tel:+77717627077'>+7 (771) 762 7077</a>
          </p>
       </div>
        </div>
    </div>
   </div>
    )
}
