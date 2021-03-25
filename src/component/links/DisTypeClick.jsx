import { useState } from 'react'
import '../../styles/button.scss'
import ChooseDisease from '../choose/ChooseDisease'
export default function DisTypeClick({nameDis,arrayOf = []}){
    const [click,setClick] = useState(false)
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
        <div className='dis'>
        <div className='headerName'>
        <div className='row align-items-center'>
              <div className='col-11'>
                    <span className={'name'}>{nameDis}</span>
              </div>
              <div className='col-1' onClick={()=>{setClick(!click)}}>
              <i className={click?'fa fa-angle-down':'fa fa-angle-right'}></i>
              </div>
          </div>
          <div className={click?'':'none'}>
                {
                    arrayOf.map((el,index)=>(
                    <div 
                    key={index}
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
