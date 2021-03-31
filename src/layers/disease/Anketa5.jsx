import ChooseAnketa from '../../component/choose/ChooseAnketa'
import BlueButton from '../../component/button/BlueButton'
import '../../styles/button.scss'
import {useState} from 'react'
export default function Anketa5({next}){
    const[chooseOne, setChooseOne] = useState({
        chosen:null,
        objects:[{id:0},{id:1},{id:2},{id:3}]
    })
    
    const handleState=(index)=>{
        setChooseOne({
            ...chooseOne,
            chosen:chooseOne.objects[index]
        })
    }
    const arr=[
        'Нет',
        'Не чаще чем 1 раз в неделю',
        'Несколько дней в неделю',
        'Ежедненвно'
    ]
    const array=[
        [],
        [],
        ['Укажите число дней'],
        []
    ]
    return(
        <div className='anketas'>
            <div className='texts'>
                <p>Вопрос 5 из 7</p>
                <span>Принимаете ли алькогольные напитки: пиво, вино, виски, водка?</span>
            </div>
            <form>
        {chooseOne.objects.map((el, index)=>(
                   <div 
                       className='form'
                        key={index}
                        onClick={()=>{
                         handleState(index)
                        }}>
                       <ChooseAnketa 
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