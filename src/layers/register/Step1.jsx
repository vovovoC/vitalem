import BlueButton from '../../component/button/BlueButton'
import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Heading from '../../component/heading/Heading'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useState,useEffect} from 'react'
export default function Step1(){
    const [userV, setUserV] = useState({
            name:'',
            surname:'',
            lastname:'',
            phone:''
    })
    useEffect(() => {
        
        axios.post("https://t6.gist.kz/api/register",{
            user:{
                name: userV.name,
                surname: userV.surname,
                lastname:userV.lastname,
                phone:userV.phone
            }
          })
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