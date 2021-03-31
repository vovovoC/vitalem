import Heading from '../../component/heading/Heading'
import Gender from '../../component/choose/gender/Gender'
import BlueButton from '../../component/button/BlueButton'
import { useState } from 'react'
import {profile} from '../../api'
export default function Step3({increase}){
    const [gender, setGender] = useState('');

    function reg(e){
        e.preventDefault()
        profile(gender, function(res){
          if(res != undefined){
            increase()
          }
        })
      }
    return(
        <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Выберите пол '/>
            </div>
           <form onSubmit={reg}>
           <Gender setGender={setGender}/>
            <div className='bt'>
                <BlueButton name='Далее'/>
                </div> 
           </form>
        </div>   
    )
}