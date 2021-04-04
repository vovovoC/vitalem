
import {useHistory , Link, Redirect} from 'react-router-dom'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import {useState,useContext ,useEffect , useRef} from 'react'
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

export default function Register({match}){
    const{  params: {pageId} } = match
    const history = useHistory()
    const ref = useRef()
    const [error, setError] = useState("")
    const [ current, setCurrent] = useState(null)

    const[step,setStep] = useState(null)

    useEffect(()=>{
        if(parseInt(pageId) <= 0) history.replace("/")
        if(parseInt(pageId) >= 10) history.replace("/profile")
        setStep([
            <Step1  increase={redirectTo} error={setError}/>, 
            <Step2  increase={redirectTo} error={setError}/>,
            <Step3  increase={redirectTo} error={setError}/>,
            <Step4  increase={redirectTo} error={setError}/>,
            <Step5  increase={redirectTo} error={setError}/>,
            <Step6  increase={redirectTo} error={setError}/>,
            <Step7  increase={redirectTo} error={setError}/>,
            <Step8  increase={redirectTo} error={setError}/>,
            <Step9  increase={redirectTo} error={setError}/>,
            <Step10 increase={redirectTo} error={setError}/>,
            <Step11 increase={redirectTo} error={setError}/>,
            <Step12 increase={redirectTo} error={setError}/>,
            <Step13 increase={redirectTo} error={setError}/>,
            <Step14 increase={redirectTo} error={setError}/>
        ])

    },[pageId])

    useEffect(()=>{
        if(step != null)
            setCurrent(step[parseInt(pageId) - 1])
    },[step])

    const redirectTo = () => {
        history.replace(`/register/${parseInt(pageId) + 1}`);
    }

    return(
        <div className='signin'>
            <div className="loader">
                <div className="loader_inner">
                     
                </div>
            </div>
            <div className='row align-items-center justify-content-center'>
                <div className='col-12 container'>
                    <div>
                        <Link to={`/register/${pageId - 1}`} >
                            <RegisterNavbar name={`Регистрация ${pageId} из 9`}/>
                        </Link>
                    </div>
                    <div className="error">
                        <span className="error_message">
                            {error}
                        </span>
                    </div>
                    <div className='registerBodyContent'>
                        <div>
                            {
                                current
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}