import logo from '../../images/Logo.svg'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import {Link} from 'react-router-dom'
import {Zoom} from 'react-reveal'
import Heading from '../../component/heading/Heading'
export default function InfoAboutRecove(){
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
          <Zoom>
        <div className='logo'>
           <img src={logo} alt='vitalem'/>
        </div>   
        <div className='headingSignin'>
          <Heading name='Восстановление пароля'/>
        </div>
        
        <div className='bodyPart'>
            <p className='infoAbout'>
                Мы отправили ссылку для восстановления 
                пароля на номер телефона. 
                Перейдите по ссылке чтобы создать новый пароль.
            </p>
          <Link to='./savenewpassword'>
                <SmallBlueLink link='Перейти на страницу авторизации'/>
          </Link>
        </div>
        </Zoom>
        </div>
    </div>
   </div>
    )
}
