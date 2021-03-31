import { useState } from 'react'
import '../../styles/button.scss'
import AboutInfo from '../choose/AboutInfo'
import InputNumber from '../input/InputNumber'
export default function ChooseAnketa({name,arrayOf = []}){
    const [click,setClick] = useState(false)
    const[ch, setCh] = useState({
        object:[]
    })
    const emp='';
    const setState=(index)=>{
        setCh({object:[...ch.object,index]})
    }
    const[list,setList] = useState({
        med:'',
        numberOf:''
    })
    const handleList = (e)=>{
        e.preventDefault();
        setList({...list,numberOf:e.target.value});
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
                    className='dis_n'
                    onClick={()=>{
                       toggle(index)
                    }}>
                        <div className='inputDate'>
                            <span className='span'>Сколько таблеток в день</span>
                            <InputNumber cb={(e)=>{handleList(e)}} placeholderText='0'/>
                        </div>
                    </div>
                    ))  
                }
          </div>
        </div>
            </div>
)}
