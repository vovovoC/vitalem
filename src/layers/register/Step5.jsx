import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import HeightChoose from '../../component/choose/height/HeightChoose';
import { useState } from 'react';
export default function Step5(){
    const [userHeight, setUserHeight] = useState({});
    return(
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
    )
}