import '../../styles/button.scss'
import camera from '../../images/camera.svg'
function PersonName({personName,personAge,email}){
    return(
        <div style={{background:'white',paddingBottom:'10px'}}>
            <div className='info'>
          <div className='col-9'>
          <div className='divName'>
          <span className='personName'>{personName}</span>
          </div>
          </div>
          
           <div className='col-3'>       
           <div className='imgCamera'> 
                <img src={camera} alt='camera'/>
           </div>
           </div>  
        </div>
        <div className='col-12'>
        <div className='divName'>
        <span className='personAge'>{personAge}</span>
           <p className='email'>{email}</p>
        </div>
          </div>
        </div>
    )   
}
export default PersonName;