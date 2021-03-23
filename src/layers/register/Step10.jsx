import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import '../../styles/button.scss'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link,useHistory} from 'react-router-dom'
import DisType from '../../component/links/DisType'
import Search from '../../component/input/Search'

const arr = [
    'Сердце и сосуды',
    'Пищеварительный тракт',
    'Печень, желчевыводящие пути',
    'Аллергия, астма',
    'Кожа, волосы',
    'Беременность',
    'Женские болезни',
    'Мочевыводящие органы',
    'Мозг, нервная система',
    'Глазные болезни',
    'Мозг, нервная система',
    'Глазные болезни'
]
const urlArray = [
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart'
]
export default function Step10(){
    const {goBack} =useHistory()
    return(       
<div className='register'>
<div className='row align-items-center justify-content-center'>
    <div className='col-12 container'>
        <div onClick={goBack}> <RegisterNavbar name='Управление болезнями'/></div>
        <div className='registerstep'>
            <div className='headingSignin' style={{textAlign:'left'}}>
                <Heading name='Выберите интересующую Вас болезнь(и) из числа перечисленных органов и систем'/>
               
            </div>
            <Search searchName='Поиск'/>
        <div>{  
                arr.map((el, index)=>(
                    <div key={index}>
                        <Link to={`./${urlArray[index]}`}  style={{textDecoration:'none'}}>
                            <DisType nameDis={arr[index]}/>   
                        </Link>
                    </div>
                 ))    
            } </div>
        </div>
            <div className='btn'>
                <Link to='./register_step_11'>
                <BlueButton name='Продолжить'/>
                </Link>
            </div>
        </div>
    </div>
</div>
    )
}
