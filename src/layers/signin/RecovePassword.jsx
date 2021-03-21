import logo from '../../images/Logo.svg'
import BlueButton from '../../component/button/BlueButton'
import SmallBlueLink from '../../component/links/SmallBlueLink'
import InputText from '../../component/input/InputText'
import {Link} from 'react-router-dom'
import {Zoom} from 'react-reveal'
import Heading from '../../component/heading/Heading'
export default function RecovePassword(){
    return(
      <div className='signin'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 container'>
      <div className='logo'>
         <img src={logo} alt='vitalem'/>
      </div>   
      <div className='bodyPart'>
      <Zoom>
      <div className='headingSignin'>
        <Heading name='Введите почту чтобы восстановить пароль'/>
      </div>

          <form>
              <InputText name='Введите почту'/>
              <Link to='./inforecove'>
              <BlueButton name='Восстановить'/>
              </Link>
          </form>
          <Link to='./signin'>
          <SmallBlueLink link='Вспомнил пароль'/>
          </Link>
      </Zoom>
      </div>
      </div>
  </div>
 </div>
    )
}
