import {Link,useHistory} from 'react-router-dom'
import Footer from '../../component/goto/Footer'
import DisType from '../../component/links/DisType'
import PersonName from './PersonName'
import Size from './Size'
import Desc from './Desc'
import NavbarInside from '../../component/navbar/NavbarInside'
// import {useState } from 'react'
function Profile(){
    // const [profileInfo,setProfileInfo] = useState('')
    const {goBack}=useHistory()
    const arr = [
        'Возраст',
        'Рост',
        'Вес'
    ]
    const arr2 = [
        '32 года',
        '176 см',
        '84 кг'
    ]
    const arrAim = [
        'Сбросить вес и управлять гипертонией',
        'Гипертония, Диабет, Гепатит',
        'Малоподвижный',
        'Стремлюсь к здоровому питанию',
        'Бекжанова А.Л. – VitAlem Clinic'
    ]
    const arrDescAim = [
        'Цели',
        'Интересующие болезни',
        'Образ жизни',
        'Характер питания',
        'Персональный врач'
    ]
    const urlArray = [
        'recommendation',
        'purpose',
        'passport',
        'aboutProject'
    ]
    const arrOfThings=[
        'Рекомендации врача',
        'Назначенные лекарства',
        'Паспорт здоровья',
        'О проекте'
    ]
    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
              <div className='profile'>
          <div onClick={goBack}> <NavbarInside name='Мой профиль' prof='prof'/></div>
            <PersonName personName='Коротков Андрей Николаевич' personAge='32 года, мужчина' email='akorotkov@gmail.com'/>
            <div className='div'></div>
          <div> {
                  arr.map((el, i)=>(
                       <div key={i}>
                            <Size sizeName={arr[i]} sizeNum={arr2[i]}/>
                       </div>
                  ))
            }
           </div>
           <div className='div'></div>
           <div>
           {
                  arrAim.map((el, i)=>(
                       <div key={i}>
                           <Desc nameAim={arrAim[i]} descAim={arrDescAim[i]} hel='color'/>
                       </div>
                  ))
            }
           </div>
           <div className='div'></div>
          <div>
          {  
                             arrOfThings.map((el, index)=>(
                                 <div key={index}>
                                      <Link to={`./${urlArray[index]}`} style={{textDecoration:'none'}}>
                                        <DisType nameDis={arrOfThings[index]}/>   
                                    </Link>
                                    
                                 </div>
                             ))    
            }
          </div>
          <div className='div'></div>
          <div>
               <Link to='/' style={{textDecoration:'none'}}>
               <DisType nameDis='Выйти из профиля'/></Link>
          </div>
       
          </div>
            <Footer activeStatus='5'/>
        </div>
        </div>
        </div>

    )
}
export default Profile;