import { useState } from 'react'
import '../../styles/button.scss'
import AboutInfo from '../choose/AboutInfo'
import ChooseDisease from '../choose/ChooseDisease'
export default function ChooseAnketaS({name,arrayOf = []}){
    const [click,setClick] = useState(false)
    const[ch, setCh] = useState({
        object:[]
    })
    const emp='';
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
        <div>
        <div className='headerName'>
        <div className='row align-items-center'>
              <div className='col-12' onClick={()=>{setClick(!click)}}>
              <AboutInfo 
                        text={name} 
                        choose = {click?'allow':'no'}
                        dis = {emp}
                        /> 
              </div>
          </div>
          <div className={click?'':'none'}>
                {
                    arrayOf.map((el,index)=>(
                    <div 
                    key={index}
                    className='dis_p'
                    onClick={()=>{
                       toggle(index)
                    }}>
                          <ChooseDisease 
                            text={arrayOf[index]} 
                            choose={toggleAllow(index)?'allow':'no'} 
                            />
                    </div>
                    ))  
                }
          </div>
        </div>
            </div>
)}