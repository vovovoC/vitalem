import InputText from '../../component/input/InputText'
import qs from 'qs'
import axios from 'axios'
import Heading from '../../component/heading/Heading'
import {useState,useEffect} from 'react'

export default function Step1(){
    const [userV, setUserV] = useState({
            name:'',
            surname:'',
            lastname:'',
            phone:''
    })
    useEffect(() => {
      let me = "aPM331"
      if(window.localStorage.getItem("token") != undefined){
        axios.get("https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/profile",
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
      axios.post("https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/login",
          qs.stringify({
            phone: "+7 707 123 12 23",
            password: me
          }),
          { 
            "x-requested-with": "xhr",
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        )
        .then((res)=>{
          window.localStorage.setItem("token",res.data.token)
        })
        .catch((res)=>{
          console.log(res)
        });
        
      }, [userV]);
      const changeName = (e)=>{
          e.preventDefault();
        setUserV({...userV,name:e.target.value})
      }
      const changeSurname = (e)=>{
        e.preventDefault();
      setUserV({...userV,surname:e.target.value})
    }
    const changeLastname = (e)=>{
        e.preventDefault();
      setUserV({...userV,lastname:e.target.value})
    }
    return(
        <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Зарегистрируйтесь и раскройте секреты своего здоровья'/>
            </div>
            <form>
                <InputText placeholderText='Имя' cb = {changeName}/>
                <InputText placeholderText='Фамилия' cb = {changeSurname}/>
                <InputText placeholderText='Отчество' cb = {changeLastname}/>
            </form>
        </div>
    )
}