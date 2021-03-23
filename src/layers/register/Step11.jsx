import BlueButton from '../../component/button/BlueButton'
import Heading from '../../component/heading/Heading'
import {Zoom} from 'react-reveal';
import '../../styles/button.scss'
import {useState} from 'react'
import ChooseSystem from '../../component/choose/ChooseSystem'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
import { Link ,useHistory} from 'react-router-dom'

const arr = [
    'Курение и Хроническая обструктивная болезнь легких',
    'Исследование устройств mHealth',
    'Исследование недостаточности и дефицита витамина D'
];

export default function Step11(){
    const {goBack} = useHistory();
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

const allowArr = [
    'Уважаемый участник!',
    'Вы приглашены участвовать в научном исследовании, так как Вы в настоящее время курите и потенциально можете принимать участие в исследовании.',
    'Для того, чтобы Вы решили, хотите ли Вы принять участие в данном научном исследовании вам предоставлен этот документ. В данном информационном листке описаны цель исследования, ваши права и обязанности, процедуры исследования, возможные риски и польза, связанные с участием в исследовании.',
    'В случае согласия на участие в исследовании Вам необходимо будет подписать форму информированного согласия. Мы хотим, чтобы Вы знали, что: Во-первых, Участие в этом исследовании является добровольным.',
    'Вы можете отказаться от участия в исследовании или выйти из него в любое время. В любом случае Вам не будет отказано в том, на что Вы имеете право, не будучи участником исследования;',
    'Возможно, Ваше участие в исследовании не принесёт Вам дополнительной пользы. Однако в результате данного научного исследования будут получены научные знания, которые в будущем могут принести пользу другим людям.'
];

return(
    <div className='register'>
    <div className='row align-items-center justify-content-center'>
      <div className='col-12 container'>
      <div onClick={goBack}> <RegisterNavbar name='Клиническое исследование'/></div>
    <div className='registerBody'>
    <Zoom>
        <div className='headingSignin' style={{textAlign:'left'}}>
        <Heading name='Выберите клиническое исследование в котором вы участвуете:'/>
        </div>
        <div>
        {  
                                chooseOne.objects.map((el, index)=>(
                                    <div 
                                    key={index}
                                    onClick={()=>{
                                        handleState(index)
                                        }}>
                                            <ChooseSystem
                                                text={arr[index]} 
                                                choose = {
                                                    chooseOne.chosen === chooseOne.objects[index]?'allow':'no'
                                                    }/> 
                                    </div>
                                ))    
                            }
        </div>
        <div className='allowInfo'>
               {
                   allowArr.map((el,index)=>(
                       <div key={index}>
                            <p>{allowArr[index]}</p>
                       </div>
                   ))
               }
        </div>
    </Zoom>
    </div>
   
    <div className='btn'>
   <Link to='./register_step_12'>
   <BlueButton name='Принять соглашение'/>
   </Link>
    </div>
    </div>
     
</div>
</div>
)
}