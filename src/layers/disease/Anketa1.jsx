import AboutInfo from "../../component/choose/AboutInfo"
import {useState} from 'react'

export default function Anketa1(){
    const arr = [
        'Работник клиники',
        'Самостоятельно пациентом'
    ]
    const emp = ''
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
    return(
        <div className='anketas'>
            <div className='texts'>
                <p>Вопрос 1 из 7</p>
                <span>Кем заполнена анкета?</span>
            </div>
            <div>
            <div>
        {chooseOne.objects.map((el, index)=>(
                   <div 
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
                 
            </div>
            </div>
            </div>

    )
}