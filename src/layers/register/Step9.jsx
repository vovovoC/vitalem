import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import '../../styles/button.scss'
import {useState} from 'react'
import LifeStyle from '../../component/choose/LifeStyle'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link,useHistory,useRouteMatch} from 'react-router-dom'

const arr = [
    'Просто оздоровиться и предупредить болезни',
    'Похудеть и лучше выглядеть',
    'Поправиться и/или нарастить мышцы',
    'Научиться управлять болезнями',
    'Я участник клинического исследования',
    'Другое'
];
const emp = ''
export default function Step9(){
    const {goBack} = useHistory();
    let { path, url } = useRouteMatch();
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
    <div className='register'>
    <div className='row align-items-center justify-content-center'>
      <div className='col-12 container'>
      <div onClick={goBack}> <RegisterNavbar name='Регистрация 9 из 9'/></div>
    <div className='registerstep'>
        <div className='headingSignin'>
        <Heading name='Каковы Ваши цели касательно здоровья?'/>
        </div>
        <p className='podText'>Можно выбрать несколько целей</p>
        <div>
        {  
                                arr.map((el, index)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                           toggle(index)
                                        }}>
                                           <LifeStyle 
                                                text={arr[index]} 
                                                choose = {(toggleAllow(index)||emp.length!==0)?'allow':'no'}
                                                dis={emp}
                                                />   
                                    </div>
                                ))    
                            }
                            
        </div>
    
    </div>
    <div className='btn'>
    <Link to={`${url}/register_step_10`}>
   <BlueButton name='Продолжить'/>
   </Link>
    </div>
    </div>
     </div>
</div>
)
}