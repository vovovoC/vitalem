import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link } from 'react-router-dom'
import ChooseDate from '../../component/choose/date/ChooseDate';
export default function Step4(){
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
              <RegisterNavbar name='Регистрация 4 из 9'/>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Выберите пол '/>
            </div>
            <div>
                <ChooseDate/>
            </div>
        </Zoom>
        </div>
       
        <div className='signintoregister'>
       <Link to='./register_step_5'>
       <BlueButton name='Продолжить'/>
       </Link>
        </div>
        </div>
         
    </div>
   </div>
    )
}