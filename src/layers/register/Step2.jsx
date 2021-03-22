import BlueButton from '../../component/button/BlueButton'
import InputText from '../../component/input/InputText'
import InputPassword from '../../component/input/InputPassword'
import GreenCheck from '../../component/check/GreenCheck'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link,useHistory } from 'react-router-dom'
export default function Step2(){
    const {goBack} = useHistory();
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
            <div onClick={goBack}><RegisterNavbar name='Регистрация 2 из 9'/></div>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Создайте учетную запись'/>
            </div>
            <form>
                <InputText name='Введите электронную почту'/>
                <InputPassword name='Придумайте пароль'/>  
                <InputPassword name='Повторите пароль'/>  
            </form>
        </Zoom>
        </div>
       
        <div className='signintoregister'>
        <div className=' check-container'>
        <GreenCheck text='Я согласен(на) с Условиями Лицензионного и Сервисного Соглашения VitAlem' choose='allow'/>
        <GreenCheck text='Я согласен(на) с Условиями Конфиденциальности' choose='allow'/>
        <GreenCheck text='Я согласен(на) получать от VitAlem новостные и другие материалы' choose='allow'/>
        </div>
       <Link to='./register_step_3'>
       <BlueButton name='Продолжить'/>
       </Link>
        </div>
        </div>
         
    </div>
   </div>
    )
}