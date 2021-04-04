import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import BlueButton from '../../component/button/BlueButton'
import WeightChoose from '../../component/choose/weight/WeightChoose';
// import { useState } from 'react';
export default function Step6({increase = []}){
    // const [userHeight, setUserHeight] = useState(0);
    function reg(e){
        e.preventDefault()
        increase()
        // profile(date.number,date.month,date.year, function(res){
        //   if(res != undefined){
        //     increase()
        //   }
        // })
    }
    return(
        <div className='registerBody'>
            <Zoom>
                <div className='headingSignin'>
                    <Heading name='Укажите ваш вес'/>
                </div>
                <div>
                    <WeightChoose />
                </div>
                <div className='bt' onClick={(e) => reg(e)}>
                    <BlueButton name='Далее'/>
                </div>
            </Zoom>
        </div>
    )
}