import ChooseAnketaS from '../../component/choose/ChooseAnketaS'
import BlueButton from '../../component/button/BlueButton'
import '../../styles/button.scss'
import {useState} from 'react'
export default function Anketa6({next}){
    const[chooseOne, setChooseOne] = useState({
        chosen:null,
        objects:[{id:0},{id:1}]
    })
    
    const handleState=(index)=>{
        setChooseOne({
            ...chooseOne,
            chosen:chooseOne.objects[index]
        })
    }
    const arr=[
        'Да, курю',
        'Нет, не курю'
    ]
    const array=[
        [
            '1/4 пачек в день',
            '1/2 пачек в день',
            '1 пачка в день',
            '2 пачки в день'
        ],
        []
    ]
    return(
        <div className='anketas'>
            <div className='texts'>
                <p>Вопрос 6 из 7</p>
                <span>Курите в настоящее время?</span>
            </div>
            <form>
        {chooseOne.objects.map((el, index)=>(
                   <div 
                       className='form'
                        key={index}
                        onClick={()=>{
                         handleState(index)
                        }}>
                       <ChooseAnketaS 
                        name={arr[index]} 
                        arrayOf={array[index]}
                        /> 
                  </div>
           )) 
        }   
              <div className='btns'onClick={()=>{
                next()
            }}>
        <BlueButton name='Далее'/>
    </div>   
    </form>
            </div>

    )
}