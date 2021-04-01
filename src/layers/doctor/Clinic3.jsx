import '../../styles/button.scss'
import { Link,useHistory} from 'react-router-dom'
import DisType from '../../component/links/DisType'
import Search from '../../component/input/Search'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
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
export default function Clinic3(){
    const{goBack} = useHistory()
    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
            <div className='col-12 container'>
              <div onClick={goBack}><RegisterNavbar name='Выберите услугу'/></div>       
        <div className='registerstep'>
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
        </div>
        </div>
        </div>
    )
}