import AboutInfo from "../../component/choose/AboutInfo"
import {useState} from 'react'

export default function Anketa2(){
    const arr = [
        'Аортоконарное шунтирование',
        'Стентирование коронарных сосудов сердца',
        'Замена клапанов сердца',
        'Имплантация пейсмейкеров',
        'Удаление миндалин',
        'Удаление аппендикса',
        'Удаление желчного пузыря'
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
                <p>Вопрос 2 из 7</p>
                <span>Какие были хирургические вмешательства?</span>
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