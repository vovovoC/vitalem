import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import '../../styles/button.scss'
import {useState} from 'react'
import Disease from '../../component/choose/Disease'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link ,useHistory} from 'react-router-dom'
import doctors from '../../images/doctors.svg'

const arrDesc = [
    'Кардиолог',
    'Гастроэнтеролог',
    'Терапевт',
    'Терапевт',
    'Эндокринолог'
];
const arrName = [
    'Еренчина Эльмира Рауфовна',
    'Тюлебекова Гульнара Касымовна',
    'Ермакова Ирина Александровна',
    'Бекжанова Айсулу Лесбековна',
    'Елемесова Гульжан Фарахатовна'
];
export default function Step14(){
    const {goBack} = useHistory();
const[chooseOne, setChooseOne] = useState({
    chosen:null,
    objects:[{id:0},{id:1},{id:2},{id:3},{id:4}]
})

const handleState=(index)=>{
    setChooseOne({
        ...chooseOne,
        chosen:chooseOne.objects[index]
    })
}
return(
    <div className='register'>
    <div className='row align-items-center justify-content-center'>
      <div className='col-12 container'>
      <div onClick={goBack}> <RegisterNavbar name='Врачи'/></div>
      <div className='displayDoctors'>
        <img src={doctors} alt='vitalem doctors'/>
    </div>
    <div className='registerBody'>
    <Zoom> 
        <div className='headingSignin'>
        <Heading name='Выберите персонального врача из числа участников программы VitAlem'/>
        </div>
        <div>
        {  
                                chooseOne.objects.map((el, index)=>(
                                    <div 
                                    key={index}
                                    onClick={()=>{
                                        handleState(index)
                                        }}>
                                           <Disease 
                                                nameDis={arrName[index]} 
                                                description={arrDesc[index]}
                                                choose = {chooseOne.chosen === chooseOne.objects[index] ?'allow':'no'}/>   
                                    </div>
                                ))    
                            }
        </div>
    </Zoom>
    </div>
   
    <div className='btn'>
   <Link to='./register_step_9'>
   <BlueButton name='Продолжить'/>
   </Link>
    </div>
    </div>
     
</div>
</div>
)
}