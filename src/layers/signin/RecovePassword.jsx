import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import {Link,useHistory} from 'react-router-dom'
import {useState} from 'react'
import Heading from '../../component/heading/Heading'
import InputPhone from '../../component/input/InputPhone'
export default function RecovePassword(){
  const history = useHistory()
  const[newpsw, setNewpsw] = useState({
    phone:''
  })
  const changePhone =(e)=>{
    e.preventDefault();
    setNewpsw({...newpsw,phone: e.target.value})
    console.log(newpsw)
    }
  
    function reg(e){
      e.preventDefault()
      if(newpsw.phone!==''){
        history.push('./inforecove')
      }
      // login(customerSignUp.phone, customerSignUp.password, function(res){
      //   if(res !== undefined || res !== 'undefined' ||newpsw.email!==''){
      //     history.push("./profile")
      //   }
      // })
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
        <Heading name='Введите номер телефона чтобы восстановить пароль'/>
      </div>
          <form onSubmit={(e)=>(reg(e))}>
              <InputPhone nameV='phone' placeholderText='Введите номер телефона' cb ={changePhone}/>
              <BlueButton name='Восстановить'/>
          </form>
          <Link to='./signin'>
          <SmallBlueLink link='Вспомнил пароль'/>
          </Link>
      </div>
      </div>
  </div>
 </div>
    )
}
