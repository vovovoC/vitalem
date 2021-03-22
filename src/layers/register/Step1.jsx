import BlueButton from '../../component/button/BlueButton'
import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import qs from 'qs'
import axios from 'axios'
import Heading from '../../component/heading/Heading'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useState,useEffect} from 'react'
if(window.localStorage.getItem("token") != undefined){
  
}
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
        console.log(window.localStorage.getItem("token"))
        axios.get("https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/doctors",
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
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        )
        .then((res)=>{
          window.localStorage.setItem("token",res.data.token)
          console.log(res)
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
    // const changePassword=(e)=>{
    //     e.preventDefault();
      
    // }
    // const changePhone = (e)=>{
    //     e.preventDefault();
    //   setUserV({...userV,phone:e.target.value})
    // }

    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
              <RegisterNavbar name='Регистрация 1 из 9'/>
        <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Зарегистрируйтесь и раскройте секреты своего здоровья'/>
            </div>
            <form>
                <InputText placeholderText='Имя' cb = {changeName}/>
                <InputText placeholderText='Фамилия' cb = {changeSurname}/>
                <InputText placeholderText='Отчество' cb = {changeLastname}/>
                <InputPassword placeholderText='Введите пароль' nameV='password'/>
                <Link to='./register_step_2'>
                <BlueButton name='Далее'/>
               </Link>   
            </form>
        </div>
        </div>
    </div>
   </div>
    )
}