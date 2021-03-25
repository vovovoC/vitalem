    import BlueButton from '../../component/button/BlueButton'
    import Heading from '../../component/heading/Heading'
    import {Zoom} from 'react-reveal';
    import '../../styles/button.scss'
    import {useState} from 'react'
    import LifeStyle from '../../component/choose/LifeStyle'
    import RegisterNavbar from '../../component/navbar/RegisterNavbar'
    import { Link,useHistory,useRouteMatch} from 'react-router-dom'
const arr = [
    'Малоподвижный, сидячий',
    'Средней активности',
    'Активный, спортивный'
];
export default function Step7(){
    const {goBack} = useHistory();
    let { path, url } = useRouteMatch();
    const emp = ''
    const[chooseOne, setChooseOne] = useState({
        chosen:null,
        objects:[{id:0},{id:1},{id:2}]
    })
    
    const handleState=(index)=>{
        setChooseOne({
            ...chooseOne,
            chosen:chooseOne.objects[index]
        })
    }
    return(
        <div className='signin'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
          <div onClick={goBack}> <RegisterNavbar name='Регистрация 7 из 9'/></div>
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Какой у вас образ жизни?'/>
            </div>
            <div>
            {  
<<<<<<< HEAD
                                    chooseOne.objects.map((el, index)=>(
                                        <div 
                                        key={index}
                                        onClick={()=>{
                                            handleState(index)
                                            }}>
                                                <LifeStyle 
                                                    text={arr[index]} 
                                                    choose = {
                                                        chooseOne.chosen === chooseOne.objects[index]?'allow':'no'
                                                        }
                                                    dis={emp}
                                                    /> 
                                        </div>
                                    ))    
                                }
=======
                chooseOne.objects.map((el, index)=>(
                    <div 
                        key={index}
                        onClick={()=>{
                        handleState(index)
                        }}>
                            <LifeStyle 
                                text={arr[index]} 
                                choose = {
                                chooseOne.chosen === chooseOne.objects[index]?'allow':'no'
                        }/> 
                    </div>
                ))    
            }
>>>>>>> 05f1f79889ffb3c349a495d0b46d9d1be445b666
            </div>
        </Zoom>
        </div>
       
        <div className='signintoregister'>
        <Link to={`${url}/register_step_8`}>
       <BlueButton name='Продолжить'/>
       </Link>
        </div>
        </div>
         
    </div>
   </div>
    )
}