import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import InputPassword from '../../component/input/InputPassword'
import {useHistory} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import { useState } from 'react'
export default function SaveRecovedPassword(){
  const history = useHistory()
  const[psw, setPsw] = useState({
    newpsw:'',
    confirmpsw:'',
    wrong:''
  })
  const changePsw=(e)=>{
    e.preventDefault();
    setPsw({...psw,newpsw:e.target.value})
  }
  const changeConfirm=(e)=>{
    e.preventDefault();
    setPsw({...psw,confirmpsw:e.target.value})
  }
  function reg(e){
    e.preventDefault()
    if(psw.newpsw===psw.confirmpsw && psw.newpsw!=='' && psw.confirmpsw!==''){
      history.push('./infosaved')
    }
    else{
      setPsw({...psw,wrong:'Неправильный пароль'})
    }
  }
  console.log(psw)
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
        <div className='logo'>
           <img src={logo} alt='vitalem'/>
        </div>   
        <div className='bodyPart'>
        <div className='headingSignin'>
          <Heading name='Восстановление пароля'/>
        </div>
            <form onSubmit={(e)=>(reg(e))}>
                <InputPassword placeholderText='Придумайте новый пароль' cb={changePsw} nameV='password'/>
                <InputPassword placeholderText='Повторите пароль'  cb={changeConfirm} nameV='password'/>
                <BlueButton name='Сохранить'/>
                <p className={psw.wrong.length>0?'redText_error':'none'}>Вы ввели неправильный пароль.</p>
            </form>
        </div>
        </div>
    </div>
   </div>
    )
}
