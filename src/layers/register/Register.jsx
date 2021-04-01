
import {useHistory} from 'react-router-dom'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useState} from 'react'
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
    const[count,setCount] = useState(1)
    const {goBack} = useHistory();
    const history = useHistory()
    const increase=()=>{
       if(count===14){
        history.push('./profile')
       }
       else{
        setCount(prevCount=>prevCount+1)
       }
    }
    const decrease=()=>{
       if(count===1){
        goBack()
       }
       else{
        setCount(prevCount=>prevCount-1)
       }
    }
    const step = [
        <Step1  increase={increase}/>,
        <Step2  increase={increase}/>,
        <Step3  increase={increase}/>,
        <Step4  increase={increase}/>,
        <Step5  increase={increase}/>,
        <Step6  increase={increase}/>,
        <Step7  increase={increase}/>,
        <Step8  increase={increase}/>,
        <Step9  increase={increase}/>,
        <Step10 increase={increase}/>,
        <Step11 increase={increase}/>,
        <Step12 increase={increase}/>,
        <Step13 increase={increase}/>,
        <Step14 increase={increase}/>
    ]
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
              <div onClick={decrease}><RegisterNavbar name={`Регистрация ${count} из 9`}/></div>
        <div className='registerBodyContent'>
            <div>{step[count - 1]}</div>
        </div>
        </div>
    </div>
   </div>
    )
}