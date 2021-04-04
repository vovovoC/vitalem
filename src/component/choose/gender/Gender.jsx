import male from '../../../images/male.svg'
import female from '../../../images/female.svg'

import {useState} from 'react'
import falseG from '../../../images/blueunchecked.svg'
import trueG from '../../../images/bluechecked.svg'
function Gender({setGender}){
    const [m, setM] = useState(false);
    const [fm, setFm] = useState(false);
    const changeGender=()=>{
        if(m){
         setGender('male')
        }
        else{
            setGender('female')
        }
    }
    return(
            <div className='row justify-content-center'>
                            <div className='col-6 col-sm-5'>
                                    <div className='gender'>
                                            <div className='check' onClick={
                                                ()=>{
                                                    setFm(false); 
                                                    setM(!m);
                                                    changeGender()
                                                }
                                            }>
                                              {m ? <img src={trueG} alt='choose'/>:<img src={falseG} alt='choose'/>}
                                            </div>
                                       <div className='container'>
                                          <div className='content'>
                                              <div style={{height:'30px'}}/>
                                            <img src={male} alt='male'/>
                                            <div style={{height:'25px'}}/>
                                            <p>Мужчина</p>
                                          </div>
                                       </div>
                                    </div>
                            </div>
                    
                            <div className='col-6 col-sm-5'>
                                    <div className='gender'>
                                            <div className='check' onClick={
                                                ()=>{
                                                    setFm(!fm); 
                                                    setM(false);
                                                    changeGender()
                                                }
                                            }>
                                                {fm ?<img src={trueG} alt='choose'/>:<img src={falseG} alt='choose'/> }
                                            </div>
                                    <div className='container'>
                                          <div className='content'>
                                          <div style={{height:'30px'}}/>
                                            <img src={female} alt='female'/>
                                            <div style={{height:'25px'}}/>
                                            <p>Женщина</p>
                                          </div>
                                       </div>
                                    </div>
                            </div>
                           
        </div>
    )
}
export default Gender;