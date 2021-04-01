import InputText from '../../component/input/InputText'
import InputPhone from '../../component/input/InputPhone'
import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {useState} from 'react'
import { register } from '../../api'


export default function Step1({increase=[], error}){
    const [userV, setUserV] = useState({
            name:'',
            surname:'',
            lastname:'',
            phone:''
    })
    if(window.localStorage.getItem("token") != null) increase()
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
  const validation = () => {
    let lenValidation = ""
    Object.keys(userV).forEach(element => {
      if(userV[element].length == 0) lenValidation = "Please fill all credetials" 
    });
    if(lenValidation.length > 0) return lenValidation
    if(userV["phone"].length  !=  16) return "Please fill valid phone"

    return true
  }
    function reg(e){
      e.preventDefault()

      if(typeof validation() == "string"){
        error(validation())
        return;
      }
      error("")
      document.querySelector(".loader").classList.add("show_loader")
      register(userV.phone,userV.name, userV.surname,userV.lastname, function(res){
        if(res != undefined){
          document.querySelector(".loader").classList.remove("show_loader")
          increase()
        }
      },function(err){

        document.querySelector(".loader").classList.remove("show_loader")
        error(err + "")
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