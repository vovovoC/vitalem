import '../../../styles/button.scss'
import  { useState, useEffect, useRef } from 'react'

export function chooseLogin(value, setValue){
  let thread;
  const scrollEvent = (e) => {
    let col = Math.round( e.target.scrollTop / e.target.children[0].offsetHeight)
    // clear Timeout to work clearly with setTimeout where scroll event very sensitive
    window.clearTimeout(thread)
    // set time out to detect last position of date
    thread = setTimeout(function(){
      // remove all children classes to append levels
      // for(let y = 2;y < e.target.children.length - 2;y++){
      //   if(e.target.children[y].classList.length > 0){
      //     e.target.children[y].classList.remove(...e.target.children[y].classList);
      //   }
      // }
      e.target.scrollTop = e.target.children[0].offsetHeight * col
      const stateObj = function(){
        let returnVal = value;
        returnVal[e.target.classList[0]] = e.target.children[col+2].innerText
        return returnVal
      };
      setValue(stateObj)
      // // add blur and color as in design
      // e.target.children[col].classList.add("level3") 
      // e.target.children[col + 1].classList.add("level2")
      // // center element should be clearly seen
      // e.target.children[col + 2].classList.add("level1")
      // // as first 2 elements, last two elements should be blur 
      // e.target.children[col+3].classList.add("level2")
      // e.target.children[col+4].classList.add("level3")
      // time by default static value 70
      
    },70)
  }
  return{
    onScroll: e => scrollEvent(e)
  }
}


export default function ChooseDate(props){
  const [height,setHeight] = useState(0);
  const [heightOfDate, setDateHeight] = useState(0);
  const ref = useRef(null);
  const {
    date,
    setDate
  } = props
  // use effect hook to get height and date-height
  useEffect(()=>{
    setHeight(ref.current.offsetHeight)
    setDateHeight(ref.current.offsetHeight * 5)
    

  })
  
  // indicator height for future adaptive uses
  const setIndicatorHeight = {
    height: `${height}px`
  }
  // as in design 5 elements should be seen front of user
  const setControllersHeight = {
    maxHeight: `${heightOfDate}px`
  }

    return(
      
      <div className='date'>
            <div className="alignment">
              <div className="alignment_content">
                <div className="dates">
                  <div style={setControllersHeight} className="number" {...chooseLogin(date, setDate)} >
                    <span className="hide_it">2000</span>
                    <span className="hide_it">2000</span>
                    {
                      Array.from(Array(30), (e,i) => {
                        
                        return <span key={i}> {i+=1}</span>
                        
                      })
                    }
                    <span className="hide_it">2000</span>
                    <span className="hide_it">2000</span>
                  </div>
                  <div style={setControllersHeight} className="month" {...chooseLogin(date, setDate)} >
                    <span className="hide_it" ref={ref}>Январь</span>
                    <span className="hide_it">Февраль</span>
                    <span className="level1">Январь</span>
                    <span>Февраль</span>
                    <span>Март</span>
                    <span>Апрель</span>
                    <span>Май</span>
                    <span>Июнь</span>
                    <span>Июль</span>
                    <span>Август</span>
                    <span>Сентябрь</span>
                    <span>Октябрь</span>
                    <span>Ноябрь</span>
                    <span>Декабрь</span>
                    <span className="hide_it">Hrer</span>
                    <span className="hide_it">sda</span>
                  </div>
                  <div className="year" style={setControllersHeight} {...chooseLogin(date, setDate)}>
                    <span className="hide_it">2000</span>
                    <span className="hide_it">2000</span>
                    {
                      Array.from(Array(100), (e,i) => {
                        
                        return <span key={i}> {2020 - i}</span>
                        
                      })
                    }
                    <span className="hide_it">2000</span>
                    <span className="hide_it">2000</span>
                  </div>
                </div>
                <div className="indicator" style={setIndicatorHeight}>
                  
                </div>
              </div>
            </div>
      </div>
    )
}

