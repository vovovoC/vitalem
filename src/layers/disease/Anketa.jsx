import BlueButton from '../../component/button/BlueButton'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useHistory} from 'react-router-dom'
import Anketa1 from './Anketa1';
import Anketa2 from './Anketa2';
import Anketa3 from './Anketa3';
import Anketa4 from './Anketa4';
import Anketa5 from './Anketa5';
import Anketa6 from './Anketa6';
import Anketa7 from './Anketa7';
import Footer from '../../component/goto/Footer'
import {useState } from 'react';
export default function Anketa(){
    const {goBack} = useHistory();
    const[count,setCount] = useState(1)
    const next=()=>{
        if(count<8){
        setCount(prevCount=>prevCount+1)
        }else{
        setCount(0)
        }  
    }
    console.log(count)
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
             <div onClick={goBack}><RegisterNavbar name='Анкета'/></div>
        <div className='anketaDiv'>
              <div className={count===1?'':'none'}><Anketa1/></div>
              <div className={count===2?'':'none'}><Anketa2/></div>
              <div className={count===3?'':'none'}><Anketa3/></div>
              <div className={count===4?'':'none'}><Anketa4/></div>
              <div className={count===5?'':'none'}><Anketa5/></div>
              <div className={count===6?'':'none'}><Anketa6/></div>
              <div className={count===7?'':'none'}><Anketa7/></div>
             
              <div className='btns'onClick={()=>{
                next()
        }}>
            <BlueButton name='Далее'/>
        </div>
        </div>
        <Footer activeStatus='2'/>
        </div>
      
    </div>
   </div>
    )
}