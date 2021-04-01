import Heading from '../../component/heading/Heading'
import Gender from '../../component/choose/gender/Gender'
import BlueButton from '../../component/button/BlueButton'
import { useState } from 'react'
import {profile,updateProfile} from '../../api'
export default function Step3({increase,error}){
    const [gender, setGender] = useState('');

    function reg(e){
      e.preventDefault()
      if(gender == "") {
        error("please fill credentials")
        return;
      }
      error("")
      setGender(gender === "female" ? "male" : "female")

      document.querySelector(".loader").classList.add("show_loader")
      updateProfile({"genders" :gender}, function(res){
        if(res != undefined){
          document.querySelector(".loader").classList.remove("show_loader")
          console.log(res)
          increase()
        }
      },function(err){
        document.querySelector(".loader").classList.remove("show_loader")

        error(err)
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