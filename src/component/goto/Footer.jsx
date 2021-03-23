import p1 from '../../images/health1.svg'
import p2 from '../../images/disease1.svg'
import p3 from '../../images/doctor.svg'
import p4 from '../../images/bio.svg'
import p5 from '../../images/profile1.svg'
// ------------------------------------
import p11 from '../../images/health.svg'
import p22 from '../../images/disease.svg'
import p33 from '../../images/doctor.svg'
import p44 from '../../images/bio.svg'
import p55 from '../../images/profile.svg'
// -------------------------------------
export default function Footer({activeStatus}){
    return(
        <div className='footer'>
                <img alt='icon' src={activeStatus==='1'?p1:p11}/>
                <img alt='icon' src={activeStatus==='2'?p2:p22}/>
                <img alt='icon' src={activeStatus==='3'?p3:p33}/>
                <img alt='icon' src={activeStatus==='4'?p4:p44}/>
                <img alt='icon' src={activeStatus==='5'?p5:p55}/>
        </div>
    )
}