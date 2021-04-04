import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import HeightChoose from '../../component/choose/height/HeightChoose';
import BlueButton from '../../component/button/BlueButton'
import { useState } from 'react';
export default function Step5({increase = []}){
    const [userHeight, setUserHeight] = useState({});
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
                <Heading name='Укажите ваш рост'/>
                </div>
                <div>
                    <HeightChoose userHeight = {userHeight} setUserHeight={setUserHeight}/>
                </div>
                <div className='bt' onClick={(e) => reg(e)}>
                    <BlueButton name='Далее'/>
                </div>
            </Zoom>
        </div>
    )
}