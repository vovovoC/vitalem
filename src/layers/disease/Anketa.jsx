import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useHistory} from 'react-router-dom'
import Anketa1 from './Anketa1';
import Anketa2 from './Anketa2';
import Anketa3 from './Anketa3';
import Anketa4 from './Anketa4';
import Anketa5 from './Anketa5';
import Anketa6 from './Anketa6';
import Anketa7 from './Anketa7';
import Anketa8 from './Anketa8';
import Footer from '../../component/goto/Footer'
import {useState } from 'react';
export default function Anketa(){
    const[count,setCount] = useState(1)
    const history = useHistory()
    const {goBack} = useHistory()
    const[list, setList] = useState({
        happened:'default',
        date:''
    })
    const next=(e)=>{
        if(count===9){
            history.push('./profile')
        }else{
            setCount(prevCount=>prevCount+1)
        }  
    }
    const prev=(e)=>{
        if(count===1){
            goBack()
        }else{
            setCount(prevCount=>prevCount-1)
        }  
    }
    const[components, setComponents] = useState(
        [<Anketa1 next={next} list={list} setList={setList}/>,
        <Anketa2 next={next}/>,
        <Anketa3 next={next}/>,
        <Anketa4 next={next}/>,
        <Anketa5 next={next}/>,
        <Anketa6 next={next}/>,
        <Anketa7 next={next}/>,
        <Anketa8 next={next}/>
    ]
    )
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
        <div onClick={prev}><RegisterNavbar name='Анкета'/></div>
        <div className='col-12 container'>
            <div className='anketaDiv'> 
                <div>{components[count - 1]}</div>
            </div>
        </div>
        <Footer activeStatus='2'/>
    </div>
   </div>
    )
}