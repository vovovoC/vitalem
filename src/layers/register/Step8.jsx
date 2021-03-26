import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import '../../styles/button.scss'
import {useState} from 'react'
import LifeStyle from '../../component/choose/LifeStyle'

const arr = [
    'Считаю, мое питание нездоровым',
    'Стремлюсь к улучшению питания',
    'Считаю, что питаюсь правильно'
];
const emp = ''
export default function Step8(){
const[chooseOne, setChooseOne] = useState({
    chosen:null,
    objects:[{id:0},{id:1},{id:2}]
})

const handleState=(index)=>{
    setChooseOne({
        ...chooseOne,
        chosen:chooseOne.objects[index]
    })
}
return(
    <div className='registerBody'>
    <Zoom>
        <div className='headingSignin'>
        <Heading name='Каков характер вашего питания?'/>
        </div>
        <div>
        {  
                                chooseOne.objects.map((el, index)=>(
                                    <div 
                                    key={index}
                                    onClick={()=>{
                                        handleState(index)
                                        }}>
                                            <LifeStyle 
                                                text={arr[index]} 
                                                choose = {
                                                    chooseOne.chosen === chooseOne.objects[index]?'allow':'no'
                                                    }
                                                dis={emp}
                                                    /> 
                                    </div>
                                ))    
                            }
        </div>
    </Zoom>
    </div>
)
}