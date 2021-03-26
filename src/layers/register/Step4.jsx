import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import ChooseDate from '../../component/choose/date/ChooseDate';
import { useState } from 'react';
export default function Step4(){
    const [date,setDate] = useState({
        month: "january",
        number: "3",
        year: "2012"
    });
    return(
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
    )
}