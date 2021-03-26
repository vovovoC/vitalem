import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import GreenCheck from '../../component/check/GreenCheck'
import Heading from '../../component/heading/Heading'
import {useState} from 'react'
export default function Step2(){
    const arr =[
        'Я согласен(на) с Условиями Лицензионного и Сервисного Соглашения VitAlem',
        'Я согласен(на) с Условиями Конфиденциальности',
        'Я согласен(на) получать от VitAlem новостные и другие материалы'
    ]
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
    return(
    <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Создайте учетную запись'/>
            </div>
            <form>
                <InputText placeholderText='Введите электронную почту' nameV='email'/>
                <InputPassword placeholderText='Придумайте пароль' nameV='password'/>  
                <InputPassword placeholderText='Повторите пароль' nameV='password'/>  
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