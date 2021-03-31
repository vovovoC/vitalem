import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import ChooseDate from '../../component/choose/date/ChooseDate';
import { useState } from 'react';
import BlueButton from '../../component/button/BlueButton'
import {profile} from '../../api'
export default function Step4({increase}){
    const [date,setDate] = useState({
        month: "january",
        number: "3",
        year: "2012"
    });
    function reg(e){
        e.preventDefault()
        profile(date.number,date.month,date.year, function(res){
          if(res != undefined){
            increase()
          }
        })
      }
    return(
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Выберите дату рождение '/>
            </div>
          <form onSubmit={reg}>
          <div>
                <ChooseDate setDate={setDate} date={date}/>
            </div>
            <div className='bt'>
                <BlueButton name='Далее'/>
                </div> 
          </form>
        </Zoom>
        </div>
    )
}