import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link ,useHistory} from 'react-router-dom'
import WeightChoose from '../../component/choose/weight/WeightChoose';
import { useState } from 'react';
export default function Step6(){
    const [userHeight, setUserHeight] = useState(0);
    const {goBack} = useHistory();
    return(
        <div className='signin'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-12 container'>
                    <div onClick={goBack}> 
                        <RegisterNavbar name='Регистрация 5 из 9'/>
                    </div>
                    <div className='registerBody'>
                        <Zoom>
                            <div className='headingSignin'>
                                <Heading name='Укажите ваш вес'/>
                            </div>
                            <div>
                                <WeightChoose />
                            </div>
                        </Zoom>
                    </div>
                    
                    <div className='signintoregister'>
                        <Link to='./register_step_7'>
                            <BlueButton name='Продолжить'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}