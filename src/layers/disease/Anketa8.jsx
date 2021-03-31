import InputAnketa from '../../component/input/InputAnketa'
import BlueButton from '../../component/button/BlueButton'
import { useState } from 'react'
export default function Anketa8({next}){
const[list,setList] = useState({
    med:''
})

const changeInput=(e)=>{
    e.preventDefault();
    setList({...list,med:e.target.value});
}
function reg(e){
    e.preventDefault()
    if(list.happened!==''){
        next(e)
    }
  }
  console.log(list)
    return(
        <div className='anketas'>
            <div className='texts'>
            <p>Вопрос 7 из 7</p>
                <span>Укажите кем вам приходиться родственник ( брат, сестра, отец или др.)</span>
            </div>
           <form onSubmit={(e)=>{reg(e)}}>
                <div className='dateList_'>
                <InputAnketa text='' cb={(e)=>{changeInput(e)}}/>
                </div>
           <div className='btns'>
                <BlueButton name='Далее'/>
            </div>  
           </form>
            </div>

    )
}
                