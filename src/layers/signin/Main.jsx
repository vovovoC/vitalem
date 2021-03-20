import  logo from '../../images/LogoBig.svg'
import '../../styles/button.scss'
import BlueButton from '../../component/button/BlueButton'
import Slide from 'react-reveal/Slide'
import {Link} from 'react-router-dom'
export default function Main(){
    return(
       <div className='main'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-12'>
                    <div className='bigLogo'>
                        <img src={logo} alt='vitalem'/>
                    </div>   
                  <div className='body-container'>
                  <div className='textUnderLogo'>
                        <p>Нажимая Далее, вы соглашаетесь 
                        <a href="./"> с правами</a> и <a href='./'>пользовательским соглашением</a> нашего сервиса</p>
                    </div>
                    <Link to='./signin'>
                        <div className='buttonMainPage'>
                            <Slide left> <BlueButton name='Далее'/></Slide>
                        </div>
                    </Link>
                  </div>
                </div>
            </div>
       </div>
    )
}