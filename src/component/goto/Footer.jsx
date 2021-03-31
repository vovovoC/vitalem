import p1 from '../../images/health1.svg'
import p2 from '../../images/disease1.svg'
import p3 from '../../images/doctor.svg'
import p5 from '../../images/profile1.svg'
// ------------------------------------
import p11 from '../../images/health.svg'
import p22 from '../../images/disease.svg'
import p33 from '../../images/doctor.svg'
import p55 from '../../images/profile.svg'
import { Link } from 'react-router-dom'
// -------------------------------------
export default function Footer({activeStatus}){
    return(
        <div className='footer'>
              <Link to='./health'><img alt='icon' src={activeStatus==='1'?p1:p11}/></Link>
              <Link to='./disease'> <img alt='icon' src={activeStatus==='2'?p2:p22}/></Link>
              <Link to='./doctor'> <img alt='icon' src={activeStatus==='3'?p3:p33}/></Link>
              <Link to='./profile'> <img alt='icon' src={activeStatus==='5'?p5:p55}/></Link>
        </div>
    )
}