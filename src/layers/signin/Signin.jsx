import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import InputPassword from '../../component/input/InputPassword'
import {Link,useHistory} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import { useState } from 'react'
import {login} from '../../api'
import InputPhone from '../../component/input/InputPhone'
import '../../styles/button.scss'
export default function Signin(){
  const history = useHistory()
  const [customerSignUp, setCustomerSignUp] = useState(
    { phone: '', password: '',error:''}
  ); 
  const changePhone = (e)=>{
    e.preventDefault();
    setCustomerSignUp({...customerSignUp,phone: e.target.value})
  }
  const changePassword=(e)=>{
    e.preventDefault();
    setCustomerSignUp({...customerSignUp, password: e.target.value})
  }
  function log(e){
    e.preventDefault()
    login(customerSignUp.phone, customerSignUp.password, function(res){
      if(res !== undefined || res !== 'undefined'){
        history.push("./health")
      }
      else{
        setCustomerSignUp({...customerSignUp,error:'Неправильный номер телефона или пароль'})
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
            <form onSubmit={(e)=>{log(e)}}>
                <InputPhone placeholderText='Введите номер телефона' cb = {(e)=>{changePhone(e)}} nameV='phone'/>
                <InputPassword placeholderText='Введите пароль' cb = {(e)=>{changePassword(e)}} nameV='password'/>
                <BlueButton name='Войти' />
                <p className={customerSignUp.error.length>0?'redText_error':'none'}>{customerSignUp.error}</p>
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
