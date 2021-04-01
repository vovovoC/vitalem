import Footer from '../../component/goto/Footer'
import {useHistory} from 'react-router-dom'
import { useState} from "react";
import BlueButton from '../../component/button/BlueButton'
import '../../styles/button.scss'
import  imgClinics from '../../images/Logo.svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RegisterNavbar from "../../component/navbar/RegisterNavbar";
import InfoClinics from "../../component/goto/InfoClinics";
export default function Clinic2(){
 const {goBack} = useHistory()
 var nameClinics = ''
   const textActive=
   [
'- Соблюдать здоровый образ жизни: ежедневная пешая ходьба минимум 30 минут, занятие спортом (плавание, йога) 3 раза в неделю минимум по 1 часу, полноценный сон, не менее 7 часов, стараться засыпать и просыпаться в одно и то же время.',
'- Соблюдать водно-питьевой режим: выпивать ежедневно минимум по 2 л чистой воды, водная нагрузка до 20 00 час.',
'- Частое дробное питание 5 раз в день, с ограничением жирного, жареного, острого. В рацион добавить свежие овощи, фрукты, молочно-творожные продукты, нежирные сорта мяса.',
'- При возникновении болей в области суставной кисты принимать внутрь мовалис 7,5 мг, каждые 5-6 часов, до прекращения болей.',
'- Пройти ЭФГДС (эндоскопия).',
'- Повторить анализы на СА 72-4 через 2 месяца.',
'- Повторить анализы на гормоны щитовидной железы: ТТГ, Т3 свободный, Т4 свободный через 2 месяца.',
'- Повторить УЗИ щитовидной железы через 6 месяцев.',
'- Повторить МРТ брюшной полости с в/в контрастированием через 6 месяцев.']
const [active,setActive] = useState(true)
const infoCl = {
    i1:{
        text:'www.vitalem.kz/clinic',
        desc:'Веб сайт'
    },
    i2:{
        text:'www.vitalem.kz/clinic',
        desc:'Веб сайт'
    },
    i3:{
        text:'www.vitalem.kz/clinic',
        desc:'Веб сайт'
    }
}
console.log(Object.keys(infoCl))
    return(
    <div className='register'>
    <div className='row align-items-center justify-content-center'>
        <div className='col-12 container'>
          <div onClick={goBack}><RegisterNavbar name={nameClinics}/></div>
            <div className='logoClinic'>
                <div className='row align-items-center'>
                    <div className='col-3'>
                            <img src={imgClinics} alt={nameClinics}/>
                    </div>
                    <div className='col-9'>

                    </div>
                </div>
                <div className='row'>
                            <p>Мы раскрываем секреты здоровья и помогаем управлять болезнями </p>
                    </div>
            </div>
            <div className='hr-div'></div>
            <div className='textDiv'>     
                     {
                         textActive.map((el,i)=>(
                             <p key={i}>{textActive[i]}</p>
                         ))
                     }
            </div>
            <div className='hr-div'></div>
            <div>
                {
                     Object.keys(infoCl).map((el,index)=>(
                         <InfoClinics key={index} blue={'dfvbghn'} desc={'cdvfdbg'}/>
                     ))
                }
            </div>
            <div className='redBtn'>
             <BlueButton name='Записаться на прием'/>
             </div>
             <Footer activeStatus='3'/> 
    </div> 
    </div>
    </div> 
    )
}