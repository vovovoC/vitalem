import '../../../styles/weight.scss'
import  React,{ useState, useEffect, useRef } from 'react'
import LineBlock from '../LineBlock';
import {chooseLogin} from '../date/ChooseDate';


export default function HeightChoose(props){
    const ref = useRef({})
    const [center, setCenter] = useState(0)
    const [array, setArray] = useState(Array.from(Array(200) , (e,i) => {return {isCenter: false,index: i};}));
    const [sides, setSides] = useState({
        left: 10,
        center: 20,
        right: 30
    })
    let thread;

    ref.current["line"] = React.createRef();
    ref.current["content"] = React.createRef();
    useEffect(()=>{
        if(center === 0)
            setCenter(Math.abs(ref.current["content"].current.offsetWidth / (ref.current["line"].current.offsetWidth + 8)) / 2)
    },[center])

    const handleChange = () =>{
        const new_ar = array.map((item)=>{
            const upd = {
                ...item,
                isCenter: false
            }
            if(sides.center + 10 === item.index) {
                upd.isCenter = true;
            }
            return upd;
        })
        setArray(new_ar)
    }
    
    const scrollEvent = (e) => {
        let col = Math.ceil( e.target.scrollLeft / 10)

        window.clearTimeout(thread)

        thread = setTimeout(function(){
            e.target.scrollLeft = 10 * col
            
            setSides({
                left: col,
                center: col + 10,
                right: col + 20
            })
            handleChange()

        },50)
        
        
    }
    return(
        <div className="weight">
            
            <div className="weight_header">
                <div>
                    <span>
                        {sides.left}
                    </span>
                </div>
                <div className="king">
                    <span>
                        {sides.center}
                    </span>
                </div>
                <div>
                    <span>
                        {sides.right}
                    </span>
                </div>
            </div>
            <div className="weight_content" ref={ref.current["content"]} onScroll={scrollEvent}>
                <div className="weight_inner">
                    {
                        array.map((item)=>{
                            let height = ""
                            if(item.index % 10 === 0)    height = "120"
                            else if(item.index % 5 === 0)    height = "85"
                            else    height = "60"

                            return <LineBlock refVal={ref.current["line"]} lineHeight={height} classOf={item.isCenter ? "center" : ""}  key={item.index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}