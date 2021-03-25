import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link ,useHistory,useRouteMatch} from 'react-router-dom'
import ChooseDate from '../../component/choose/date/ChooseDate';
import { useState } from 'react';
export default function Step4(){
    const {goBack} = useHistory();
    let { path, url } = useRouteMatch();
    const [date,setDate] = useState({
        month: "january",
        number: "3",
        year: "2012"
    });
    
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
             <div onClick={goBack}><RegisterNavbar name='Регистрация 4 из 9'/></div>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Выберите дату рождение '/>
            </div>
            <div>
                <ChooseDate setDate={setDate} date={date}/>
            </div>
        </Zoom>
        </div>
       
        <div className='signintoregister'>
        <Link to={`${url}/register_step_5`}>
       <BlueButton name='Продолжить'/>
       </Link>
        </div>
        </div>
         
    </div>
   </div>
    )
}