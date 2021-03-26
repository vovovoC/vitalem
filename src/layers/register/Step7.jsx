    import Heading from '../../component/heading/Heading'
    import {Zoom} from 'react-reveal';
    import '../../styles/button.scss'
    import {useState} from 'react'
    import LifeStyle from '../../component/choose/LifeStyle'
const arr = [
    'Малоподвижный, сидячий',
    'Средней активности',
    'Активный, спортивный'
];
export default function Step7(){
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
        <div className='registerBody'>
        <Zoom>
            <div className='headingSignin'>
            <Heading name='Какой у вас образ жизни?'/>
            </div>
            <div>
            {  
                chooseOne.objects.map((el, index)=>(
                    <div 
                        key={index}
                        onClick={()=>{
                        handleState(index)
                        }}>
                            <LifeStyle 
                                text={arr[index]} 
                                dis={emp}
                                choose = {
                                chooseOne.chosen === chooseOne.objects[index]?'allow':'no'
                        }/> 
                    </div>
                ))    
            }
            </div>
        </Zoom>
        </div>
    )
}