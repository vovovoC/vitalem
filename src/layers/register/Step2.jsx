import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import GreenCheck from '../../component/check/GreenCheck'
import Heading from '../../component/heading/Heading'
import {useState} from 'react'
import {updateProfile} from '../../api'
import BlueButton from '../../component/button/BlueButton'
export default function Step2({increase , error}){
    const [userV,setUserV] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const arr =[
        'Я согласен(на) с Условиями Лицензионного и Сервисного Соглашения VitAlem',
        'Я согласен(на) с Условиями Конфиденциальности',
        'Я согласен(на) получать от VitAlem новостные и другие материалы'
    ]
    const changeEmail=(e)=>{
        e.preventDefault();
        setUserV({...userV,email:e.target.value})
    }
    const changePrevPassword=(e)=>{
        e.preventDefault();
        setUserV({...userV,prevPassword:e.target.value})
    }
    const changeConfirmPassword=(e)=>{
        e.preventDefault();
        setUserV({...userV,confirmPassword:e.target.value})
    }
    const[ch, setCh] = useState({
        object:[]
    })
    const setState=(index)=>{
        setCh({object:[...ch.object,index]})
    }
    const removeState=(index)=>{
        var i = ch.object.indexOf(index)
        ch.object.splice(i,1)
        setCh({object:ch.object})
    }
    const toggle=(index)=>{
        if(!ch.object.includes(index)){
            setState(index)
            return;
        }
        else{
            removeState(index)
            return;
        }
    }
    const toggleAllow=(index)=>{
        if(ch.object.includes(index)) return true
        else return false
    }
    const validation = () => {
        let lenValidation = ""
        Object.keys(userV).forEach(element => {
          if(userV[element].length == 0 && element != "prevPassword") lenValidation = "Please fill all credetials" 
        });
        if(lenValidation.length > 0) return lenValidation
        if(userV["password"]  !=  userV["confirmPassword"]) return "Passwords doesn't match"
    
        return true
    }
    function reg(e){
        e.preventDefault()

        increase()

        if(typeof validation() == "string"){
            // error(validation())
            return;
        }
        
        // document.querySelector(".loader").classList.add("show_loader")
        increase()
      }
      
    return(
    <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Создайте учетную запись'/>
            </div>
            <form onSubmit={reg}>
                <InputText placeholderText='Введите электронную почту' nameV='email' cb={changeEmail}/>
                <InputPassword placeholderText='Придумайте пароль' nameV='password' cb={changePrevPassword}/>  
                <InputPassword placeholderText='Повторите пароль' nameV='password' cb={changeConfirmPassword}/> 
                <div className='bt'>
                <BlueButton name='Далее'/>
                </div> 
            </form>
            <div className='check-container'>
            {  
                                 arr.map((el, index)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                           toggle(index)
                                        }}>
                                           <GreenCheck 
                                                text={arr[index]} 
                                                choose = {toggleAllow(index)?'allow':'no'}
                                            />   
                                    </div>
                                ))      
                            }
            </div>
    </div>
    )
}