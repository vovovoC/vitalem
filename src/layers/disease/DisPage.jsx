import NavbarInside from "../../component/navbar/NavbarInside";
import {useHistory} from 'react-router-dom'
import { useState} from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../../component/goto/Footer";
import DisTypeClick from '../../component/links/DisTypeClick'
import Search from "../../component/input/Search";
import BlueButton from "../../component/button/BlueButton";
export default function DisPage(){
    const {goBack} = useHistory();
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
    const [active,setActive] = useState(true)

    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
          <div onClick={goBack}> <NavbarInside name='Болезнь' prof='Болезнь'/></div>
                    <div className='scrollButton'>
                    <button onClick={()=>{
                        setActive(!active)
                    }}
                    className={active?'active': 'notactive'}
                    >Диагностика</button>
                    <button
                    onClick={()=>{
                        setActive(!active)
                    }}
                    className={active ?'notactive': 'active'}
                    >Эпизоды болезней</button>
                </div>
                
             
              <div className={active? 'show':'none'}>
              <div className='postHeading'>
                    <p>Вам нездоровится? Здесь можно узнать возможные причины </p>
                </div>
               <Search searchName='Поиск симптомов'/>   
               {  
                arr.map((el, index)=>(
                    <div key={index}>
                            <DisTypeClick nameDis={arr[index]} arrayOf={arr}/>   
                    </div>
                 ))    
                }   
                 <div className='redBtn'>
             <BlueButton name='Начать диагностику'/>
             </div>      
              </div>

{/* ---------------------------------------------------- */}
              <div className={active?'none':'show'}>
             
              </div>
            
                <Footer activeStatus='2'/>
                    </div>
                </div>
             
       </div> 
    )
}