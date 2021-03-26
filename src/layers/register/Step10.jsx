import Heading from '../../component/heading/Heading'
import '../../styles/button.scss'
import { Link} from 'react-router-dom'
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
    return(       
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
    )
}
