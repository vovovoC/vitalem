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
    let current;
    const[count,setCount] = useState(1)
    const[components, setComponents] = useState(
        [<Anketa1/>,
        <Anketa2/>,
        <Anketa3/>,
        <Anketa4/>,
        <Anketa5/>,
        <Anketa6/>,
        <Anketa7/>]
    )
    const next=(e)=>{
        if(count<8){
            setCount(prevCount=>prevCount+1)
        }else{
            setCount(0)
        }  
    }
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
             <div onClick={() => {
                 setCount(prevCount => prevCount - 1)
             }}><RegisterNavbar name='Анкета'/></div>
        <div className='anketaDiv'> 
             
            <div>{components[count - 1]}</div>
             
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