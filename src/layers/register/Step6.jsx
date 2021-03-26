import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import WeightChoose from '../../component/choose/weight/WeightChoose';
import { useState } from 'react';
export default function Step6(){
    const [userHeight, setUserHeight] = useState(0);
    return(
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
    )
}