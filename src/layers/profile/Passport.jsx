import NavbarInside from "../../component/navbar/NavbarInside";
import {useHistory} from 'react-router-dom'
import { useState,useEffect,useRef} from "react";
import '../../styles/button.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Passport(){
 const {goBack} = useHistory()
 let thread;
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
const textInactive = [
'- Опухолевидное образование среднего пальца справа, больше данных за суставную кисту. Данное состояние встречается часто, является доброкачественным процессом. Основной причиной возникновения считается ежедневная нагрузка - травматизация (ручкой в процессе писания). Не исключен рост, однако на данный момент хирургическое вмешательство не требуется. Рекомендуется Рентгенография сустава с последующей консультацией ортопеда-травматолога',
'- Был осмотрен ЛОР врачом по поводу образования жидкости в раковине правого уха. В ходе осмотра была выявлена трещина, в связи с чем было накопление геморрагической жидкости в раковине. Жидкость была пунктирована. Дальнейшее наблюдение у Лор –врача.',
'- В общем анализе крови незначительное повышение гемоглобина крови – 162 г/л, при норме 130-160 г/л. Повышение незначительное, клинической значимости не несет. В норме встречается у лиц употребляющих недостаточное количество жидкости, а также у курящих. Поэтому рекомендуется бросить курить и ежедневно употреблять чистой негазированной воды до 2 литров в сутки',
'- В биохимическом анализе крови незначительное повышение магния 1,07 ммоль/л, при норме 0,73-1,06 ммоль/л. Данное ....;']
const [active,setActive] = useState(true)


const [dates, setDates] = useState(Array.from(Array(10),(e,i) => {
    if(i == 0) return {id : i , "current" : true}
    return {
        "id" : i,
        "current" : false
    }
}))
const handleChange = (pos) =>{
    const new_ar = dates.map((item)=>{
        const upd = {
            ...item,
            current: false
        }
        if(pos === item.id) {
            upd.current = true;
        }
        return upd;
    })
    setDates(new_ar)
}
const dateScrollEvent = (e) =>{
    let widthOfEl = document.querySelector(".dataScroll_inner div").offsetWidth
    let col = Math.ceil( e.target.scrollLeft / widthOfEl)
    window.clearTimeout(thread)

    thread = setTimeout(function(){
        e.target.scrollLeft = widthOfEl * col

        
        handleChange(col)

    },50)
    
}


    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
          <div onClick={goBack}> <NavbarInside name='Паспорт здоровья' prof='rof'/></div>
          <div className='dataScroll' onScroll={dateScrollEvent}>
                <div className='dataScroll_inner'>
                    {
                        dates.map((obj)=>{
                            return (
                                <div key={obj.id}>
                                    <span className={obj.current ? "activeScroller" : "unactive"}>{2019 - obj.id}</span>
                                    <span className={obj.current ? "activeScroller" : "unactive"}>{obj.id + 1} июля</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                    <div className='scrollButton' style={{margin: "0px 0px 10px 0px"}}>
                        
                        <button onClick={()=>{
                            setActive(!active)
                        }}
                        className={active?'active': 'notactive'}
                        >Рекомендации</button>
                        <button
                        onClick={()=>{
                            setActive(!active)
                        }}
                        className={active ?'notactive': 'active'}
                        >Заключение</button>
                    </div>
            
              <div className='textDiv'>     
                     {
                         !active? textActive.map((el,i)=>(
                             <p key={i}>{textActive[i]}</p>
                         )):textInactive.map((el,i)=>(
                             <p key={i}>{textInactive[i]}</p>
                         ))
                     }
                   </div>
                    </div>
                </div>
             
       </div> 
    )
}
export default Passport;