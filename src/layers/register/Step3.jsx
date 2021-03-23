import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link,useHistory } from 'react-router-dom'
import Gender from '../../component/choose/gender/Gender'
export default function Step3(){
    const {goBack} = useHistory();
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
             <div onClick={goBack}><RegisterNavbar name='Регистрация 3 из 9'/></div>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Выберите пол '/>
            </div>
            <div>
                <Gender/>
            </div>
        </Zoom>
        </div>
        <div className='signintoregister'>
            <Link to='./register_step_4'>
            <BlueButton name='Продолжить'/>
            </Link>
        </div>
        </div>
         
    </div>
   </div>
    )
}