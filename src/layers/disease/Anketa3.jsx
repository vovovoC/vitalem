import InputAnketa from '../../component/input/InputAnketa'
import BlueButton from '../../component/button/BlueButton'
import { useState } from 'react'
import InputDate from '../../component/input/InputDate'
export default function Anketa3({next}){
const[list,setList] = useState({
    happened:'',
    date:''
})
const[dateClick,setDateClick] = useState(false)
const[click,setClick] = useState(0)
const handleList = (e)=>{
    e.preventDefault();
    setList({...list,happened:e.target.value});
}
const add=(e)=>{
    e.preventDefault();
    setClick(prevCount=>prevCount+1);
}
const deleteA =(e,item)=>{
    e.preventDefault();
    list.filter(list => list.includes(item));
}
const changeInput=(e)=>{
    e.preventDefault();
    setList({...list,date:e.target.value});
}
function reg(e){
    e.preventDefault()
    if(list.happened!=='' && list.date!==''){
        next(e)
    }
  }
  console.log(list)
    return(
        <div className='anketas'>
            <div className='texts'>
                <p>Вопрос 3 из 7</p>
                <span>Госпитализация в больницу за последние 2 года (указать причину)</span>
            </div>
           <form onSubmit={(e)=>{reg(e)}}>
                <div  className='dateList'>
                <InputAnketa text='Причина госпитализации' cb={(e)=>{handleList(e)}}/>
                <div className='inputDate'>
                    <span className='span'>Дата госпиталиазции</span>
                    <span className='dateP'><InputDate cb={(e)=>changeInput(e)} placeholderText='Укажите дату'/>
                   <i className="fa fa-angle-right"></i></span>
                </div>
                </div>
            <div 
            className={
                        click===0?
                        'enterDateList empty'
                        :'enterDateList filled'} 
            onClick={(e)=>{add(e)}}>
                    <span>+ Добавить еще госпитализацию</span>
            </div>
           <div className='btns'>
                <BlueButton name='Далее'/>
            </div>  
           </form>
            </div>

    )
}