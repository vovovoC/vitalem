import BlueButton from '../../component/button/BlueButton'
import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import {Link} from 'react-router-dom'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
export default function Step1(){
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
              <RegisterNavbar name='Регистрация 1 из 9'/>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Зарегистрируйтесь и раскройте секреты своего здоровья'/>
            </div>
            <form>
                <InputText name='Имя'/>
                <InputText name='Фамилия'/>
                <InputText name='Отчество'/>
                <InputPassword name='Введите пароль'/>
                <Link to='./register_step_2'>
                <BlueButton name='Далее'/>
               </Link>   
            </form>
        </Zoom>
        </div>
        </div>
    </div>
   </div>
    )
}