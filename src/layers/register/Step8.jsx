import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import '../../styles/button.scss'
import {useState} from 'react'
import LifeStyle from '../../component/choose/LifeStyle'
import BlueButton from '../../component/button/BlueButton'

const arr = [
    'Считаю, мое питание нездоровым',
    'Стремлюсь к улучшению питания',
    'Считаю, что питаюсь правильно'
];
const emp = ''
export default function Step8({increase = []}){
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
function reg(e){
    e.preventDefault()
    increase()
    // profile(date.number,date.month,date.year, function(res){
    //   if(res != undefined){
    //     increase()
    //   }
    // })
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
        <div className='bt' onClick={(e) => reg(e)}>
                <BlueButton name='Далее'/>
            </div>
    </Zoom>
    </div>
)
}