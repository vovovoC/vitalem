import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link ,useHistory} from 'react-router-dom'
import HeightChoose from '../../component/choose/height/HeightChoose';
import { useState } from 'react';
export default function Step5(){
    const [userHeight, setUserHeight] = useState({});
    const {goBack} = useHistory();
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
          <div onClick={goBack}> <RegisterNavbar name='Регистрация 5 из 9'/></div>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Укажите ваш рост'/>
            </div>
            <div>
               <HeightChoose userHeight = {userHeight} setUserHeight={setUserHeight}/>
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