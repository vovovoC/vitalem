import '../../../styles/button.scss'
import  { useState, useEffect, useRef } from 'react'
import {chooseLogin} from '../date/ChooseDate';

export default function HeightChoose(props){
    const [height,setHeight] = useState(0);
    const [heightOfDate, setDateHeight] = useState(0);
    const ref = useRef(null);
    const {
        userHeight,
        setUserHeight
    } = props
    // use effect hook to get height and date-height
    useEffect(()=>{
        setHeight(ref.current.offsetHeight)
        setDateHeight(ref.current.offsetHeight * 5)
    },[height,heightOfDate])
    const setIndicatorHeight = {
        height: `${height}px`
    }
    const setControllersHeight = {
        maxHeight: `${heightOfDate}px`
    }

    const setWidth = {
        width: "60%",
        margin: "0 auto"
    }
    
    return(
        <div className='date' style={setWidth}>
            <div className="alignment">
              <div className="alignment_content">
                <div className="dates">
                  <div className="year" style={setControllersHeight} {...chooseLogin(userHeight, setUserHeight)}>
                    <span className="hide_it" ref={ref}>100</span>
                    <span className="hide_it">101</span>
                    {
                      Array.from(Array(150), (e,i) => {
                        
                        return <span key={i}> {135 + i} см</span>
                        
                      })
                    }
                    <span className="hide_it">100</span>
                    <span className="hide_it">101</span>
                  </div>
                </div>
                <div className="indicator" style={setIndicatorHeight}>
                  
                </div>
              </div>
            </div>
      </div>
    )
}