import Heading from '../../component/heading/Heading'
import '../../styles/button.scss'
import {useState} from 'react'
import health_city from '../../images/vitalem-clinic.svg'
import vitalem from '../../images/keruen.svg'
import private_ from '../../images/persona-clinics.svg'
import persona from '../../images/health-city.svg'
import keruen from '../../images/private-clinics.svg'
import ChooseClinic from '../../component/choose/ChooseClinic'
import {Link,useHistory} from 'react-router-dom'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import BlueButton from '../../component/button/BlueButton'
import Clinic2 from './Clinic2'
const arrImg = [
    vitalem,health_city,persona,private_,keruen
]
const arr = [
    'Vitalem Clinics',
    'Health City',
    'Persona Clinics',
    'Private Clinics',
    'Keruen Medicus'
];
const emp = ''
export default function Clinic(){
const history = useHistory()
const[clin,setClin] = useState(false)
const[chooseOne, setChooseOne] = useState({
    chosen:null,
    objects:[0,1,2,3,4]
})
const {goBack} = useHistory()

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
      <div onClick={goBack}><RegisterNavbar name='Выберите клинику'/></div>
    <div className='registerBody'>
        <div className='headingSignin'>
        <Heading name='Участницы программы VitAlem'/>
        </div>
        <div>
        {  
             chooseOne.objects.map((el, index)=>(
              <div 
                  key={index}
                  onClick={()=>{
                        handleState(index)
                  }}>
                    <ChooseClinic 
                            image={arrImg[index]}
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
    </div>
   
    <div className='bt'>
        <Link to={`/clinic/${chooseOne.chosen + 1}`}>
            <BlueButton name='Продолжить'/>
        </Link> 
    </div>
    </div>
    </div>
    {/* {
        clin? <Clinic2/>:<Clinic/>
    } */}
   </div>
)
}