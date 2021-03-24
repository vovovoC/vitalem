import { useHistory } from 'react-router'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import '../../styles/button.scss'
import Desc from './Desc'
function Recommendation(){
    const{goBack} = useHistory()
    const arr = [
        '11 000 шагов в день',
        'до 2400 калорий',
        '8 часов в сутки',
        '8 стаканов в день'
    ]
    const arr2=[
        'Физическая активность',
        'Питание',
        'Сон',
        'Вода'
    ]
    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
             <div onClick={goBack}><RegisterNavbar name='Рекомендации врача'/></div>
              <div className='profile'>
           <div className='rec-container'>
           <div className='rec'>
                    <span>Рекомендации персонального врача</span>
                    <p className='span3'>
                        Измерять артериальное давление утром 
                        и вечером. Ежедневно утром проверять кровь 
                        на сахар.
                    </p>
            </div>
           </div>
            <div className='div'>
                {
                   arr.map((el, i)=>(
                    <div key={i}>
                        <Desc nameAim={arr[i]} descAim={arr2[i]} hel='not'/>
                    </div>
                ))  
                }
            </div>
        </div>
        </div>
        </div>
        </div>

    )
}
export default Recommendation;