
import {Link,useHistory,useRouteMatch} from 'react-router-dom'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useState,useEffect} from 'react'
import BlueButton from '../../component/button/BlueButton'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import Step10 from './Step10'
import Step11 from './Step11'
import Step12 from './Step12'
import Step13 from './Step13'
import Step14 from './Step14'


export default function Register(){
    const[step,setStep] = useState([
            <Step1/>,
            <Step2/>,
            <Step3/>,
            <Step4/>,
            <Step5/>,
            <Step6/>,
            <Step7/>,
            <Step8/>,
            <Step9/>,
            <Step10/>,
            <Step11/>,
            <Step12/>,
            <Step13/>,
            <Step14/>
        ])
    const[count,setCount] = useState(1)

    const {goBack} = useHistory();
    const increase=()=>{
       if(count<14){
        setCount(prevCount=>prevCount+1)
       }
       else{
           setCount(14)
       }
    }
    const decrease=()=>{
       if(count>1){
        setCount(prevCount=>prevCount-1)
       }
       else{
           setCount(1)
       }
    }
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
              <div onClick={decrease}><RegisterNavbar name={`Регистрация ${count} из 9`}/></div>
        <div className='registerBodyContent'>
            <div>{step[count - 1]}</div>
        </div>
       <div className='bt' onClick={increase}>
       <BlueButton name='Далее'/>
       </div>
        </div>
    </div>
   </div>
    )
}