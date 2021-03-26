import {Zoom} from 'react-reveal';
import '../../styles/button.scss'
import {useState} from 'react'
import Disease from '../../component/choose/Disease';

const arrDesc = [
    'Атеросклероз - наиболее распространенное хроническое заболевание артерий, с формированием одиночных и множественных очагов липидных, главным образом холестериновых отложений...',
    'Врожденный порок сердца является заболеванием, возникающим с рождения и связанным с нарушением структуры и функций сердца. Сердце состоит из клапанов, камер, и связанных с ними...',
    'При перекачивании сердцем крови по всему организму на стенки артерий действует сила, называемая артериальным давлением....',
    'Инфекционный эндокардит или Эндокардит – инфекция внутренней оболочки камер и клапанов сердца.',
    'Ишемическая болезнь сердца (ИБС) является лидирующей причиной смертности среди мужчин и женщин. Причиной ишемической болезни сердца является скопление атеросклеротических бляшек в...'
];
const arrName = [
    'Атеросклероз',
    'Врожденные пороки сердца',
    'Гиперторния - высокое артериальное давление',
    'Инфекционные эндокардит',
    'Ишемическая болезнь сердца'
];

export default function Step12(){
    const[ch, setCh] = useState({
        object:[]
    })
    const setState=(index)=>{
        setCh({object:[...ch.object,index]})
    }
    const removeState=(index)=>{
        var i = ch.object.indexOf(index)
        ch.object.splice(i,1)
        setCh({object:ch.object})
    }
    const toggle=(index)=>{
        if(!ch.object.includes(index)){
            setState(index)
            return;
        }
        else{
            removeState(index)
            return;
        }
    }
    const toggleAllow=(index)=>{
        if(ch.object.includes(index)) return true
        else return false
    }
return(
    <div >
    <Zoom>
        <div>
        {  
                                arrName.map((el, index)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                           toggle(index)
                                        }}>
                                           <Disease 
                                                nameDis={arrName[index]} 
                                                description={arrDesc[index]}
                                                choose = {toggleAllow(index)?'allow':'no'}/>   
                                    </div>
                                ))    
                            }
        </div>
    </Zoom>
    </div>
)
}