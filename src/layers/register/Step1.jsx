import InputText from '../../component/input/InputText'
import InputPhone from '../../component/input/InputPhone'
import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {useState} from 'react'
import { register } from '../../api'

export default function Step1({increase=[]}){
    const [userV, setUserV] = useState({
            name:'',
            surname:'',
            lastname:'',
            phone:''
    })
      const changeName = (e)=>{
          e.preventDefault();
        setUserV({...userV,name:e.target.value})
      }
      const changeSurname = (e)=>{
        e.preventDefault();
      setUserV({...userV,surname:e.target.value})
    }
    const changeLastname = (e)=>{
        e.preventDefault();
      setUserV({...userV,lastname:e.target.value})
    }
    const changePhone = (e)=>{
      e.preventDefault();
    setUserV({...userV,phone:e.target.value})
  }
    function reg(e){
      e.preventDefault()
      register(userV.phone,userV.name, userV.surname,userV.lastname, function(res){
        if(res != undefined){
          increase()
        }
      })
    }
    
    return(
       <div>
          <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Зарегистрируйтесь и раскройте секреты своего здоровья'/>
            </div>
            <form onSubmit={reg}>
                <InputText placeholderText='Имя' cb = {changeName}/>
                <InputText placeholderText='Фамилия' cb = {changeSurname}/>
                <InputText placeholderText='Отчество' cb = {changeLastname}/>
                <InputPhone placeholderText='Введите номер телефона' cb = {changePhone}/>
                <div className='bt'>
                <BlueButton name='Далее'/>
                </div>
            </form>
        </div>
       </div>
    )
}