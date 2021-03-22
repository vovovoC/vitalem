import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import '../../styles/button.scss'
import {useState} from 'react'
import LifeStyle from '../../component/choose/LifeStyle'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link } from 'react-router-dom'

const arr = [
    'Считаю, мое питание нездоровым',
    'Стремлюсь к улучшению питания',
    'Считаю, что питаюсь правильно'
];
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
    <div className='signin'>
    <div className='row align-items-center justify-content-center'>
      <div className='col-12 container'>
          <RegisterNavbar name='Регистрация 8 из 9'/>
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
                                                    }/> 
                                    </div>
                                ))    
                            }
        </div>
    </Zoom>
    </div>
   
    <div className='signintoregister'>
   <Link to='./register_step_9'>
   <BlueButton name='Продолжить'/>
   </Link>
    </div>
    </div>
     
</div>
</div>
)
}