import NavbarInside from "../../component/navbar/NavbarInside";
import {Link, useHistory} from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from 'axios'
import SearchCenter from '../../component/input/SearchCenter'
import Card from "../../component/goto/Card";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from '../../images/doctors.svg'
import {Carousel} from 'react-responsive-carousel'
import News from "../../component/goto/News";
import newsI from '../../images/Mask.svg'
import Footer from "../../component/goto/Footer";
import ShareNews from "./ShareNews";
import DisType from '../../component/links/DisType'
export default function PageH1(){
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
    const [news, setNews] = useState({
        newsName:'',
        newsImg:'',
        newsDate:''
    })
    useEffect(() => {
        if(window.localStorage.getItem("token") != undefined){
          console.log(window.localStorage.getItem("token"))
          axios.get("https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/advices",
            {
              headers:{
                "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
              }
            }
          )
          .then((res)=>{
            console.log(res)
          })
          .catch((res)=>{
            console.log(res)
          });
          return;
        }
        }, [news]);
    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
          <div onClick={goBack}> <NavbarInside name='Здоровье' prof='prof'/></div>
                    <div className='scrollButton'>
                    <button onClick={()=>{
                        setActive(!active)
                    }}
                    className={active?'active': 'notactive'}
                    >Новости медицины</button>
                    <button
                    onClick={()=>{
                        setActive(!active)
                    }}
                    className={active ?'notactive': 'active'}
                    >Азбука болезней</button>
                </div>
               <Link to='./searchInfo' style={{textDecoration:'none'}}>
               <SearchCenter searchName='Поиск'/>
               </Link>
              <div className={active? '':'none'}>
              <div className='carousel'>
               <Carousel autoPlay emulateTouch infiniteLoop>
                       <div className='displaycard'>
                       <Card imgNews={image} textNews='Восемь секретов здоровья' dateNews='22 августа'/>
                       </div>
                       <div className='displaycard'>
                       <Card imgNews={image} textNews='Восемь секретов здоровья' dateNews='22 августа'/>
                       </div>
                       <div className='displaycard'>
                       <Card imgNews={image} textNews='Восемь секретов здоровья' dateNews='22 августа'/>
                       </div>
                       <div className='displaycard'>
                       <Card imgNews={image} textNews='Восемь секретов здоровья' dateNews='22 августа'/>
                       </div>
                       <div className='displaycard'>
                       <Card imgNews={image} textNews='Восемь секретов здоровья' dateNews='22 августа'/>
                       </div>      
                </Carousel> 
               </div>
                <div className='newsdiv'>
                    <p className='newsMedicine'>Новости медицины</p>
                         <Link to='./sharenews' onClick={()=>{

                         }}>
                         <News 
                                    newsImage={newsI} 
                                    newsText={'Что такое интуитивное питание  и как она влияет...'} 
                                    newsCategory={'dvfbgnh'}
                            />
                         </Link>
                        <News newsImage={newsI} newsText={'Что такое интуитивное питание  и как она влияет...'} newsCategory={'dvfbgnh'}/>
                        <News newsImage={newsI} newsText={'Что такое интуитивное питание  и как она влияет...'} newsCategory={'dvfbgnh'}/>
                        <News newsImage={newsI} newsText={'Что такое интуитивное питание  и как она влияет...'} newsCategory={'dvfbgnh'}/>
                        <News newsImage={newsI} newsText={'Что такое интуитивное питание  и как она влияет...'} newsCategory={'dvfbgnh'}/>
                        <News newsImage={newsI} newsText={'Что такое интуитивное питание  и как она влияет...'} newsCategory={'dvfbgnh'}/>
                        <News newsImage={newsI} newsText={'Что такое интуитивное питание  и как она влияет...'} newsCategory={'dvfbgnh'}/>
                        <div className='foot'/>
                </div>  
              </div>
              <div className={active?'none':''}>
              {  
                arr.map((el, index)=>(
                    <div key={index}>
                        <Link to={`./${urlArray[index]}`}  style={{textDecoration:'none'}}>
                            <DisType nameDis={arr[index]}/>   
                        </Link>
                    </div>
                 ))    
            } 
              </div>
                <Footer activeStatus='1'/>
                    </div>
                </div>
             
       </div> 
    )
}