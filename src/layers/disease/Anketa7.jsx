import AboutInfo from "../../component/choose/AboutInfo"
import {useState} from 'react'
import BlueButton from '../../component/button/BlueButton'
export default function Anketa7({next}){
    const arr = [
        'Гипертоническая болезнь',
        'Болезни сердца',
        'Инсульт и др. нарушение мозга',
        'Диабет',
        'Депрессия',
        'Рак грудной клетки',
        'Рак простаты '
    ]
    const emp = ''
const[chooseOne, setChooseOne] = useState({
    chosen:null,
    objects:[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
})

const handleState=(index)=>{
    setChooseOne({
        ...chooseOne,
        chosen:chooseOne.objects[index]
    })
}
    return(
        <div className='anketas'>
            <div className='texts'>
                <p>Вопрос 7 из 7</p>
                <span>Имеются ли следующие заболенвания у членов семьи и близких родственников</span>
            </div>
            <div>
            <form>
        {chooseOne.objects.map((el, index)=>(
                   <div 
                       className='form'
                        key={index}
                        onClick={()=>{
                         handleState(index)
                        }}>
                       <AboutInfo 
                        text={arr[index]} 
                        choose = {
                                chooseOne.chosen === chooseOne.objects[index]
                                ?'allow':'no'}
                        dis = {emp}
                        /> 
                  </div>
           )) 
        }   
              <div className='btns'onClick={()=>{
                next()
            }}>
        <BlueButton name='Выбрать'/>
    </div>   
    </form>
    </div>
</div>
)}