import '../../../styles/button.scss'
import  { useState, useEffect, useRef } from 'react'

function chooseLogin(){
  let thread;
  const scrollEvent = (e) => {
    let col = Math.round( e.target.scrollTop / e.target.children[2].offsetHeight)
    // clear Timeout to work clearly with setTimeout where scroll event very sensitive
    window.clearTimeout(thread)
    // set time out to detect last position of date
    thread = setTimeout(function(){
      // remove all children classes to append levels
      for(let y = 2;y < e.target.children.length - 2;y++){
        if(e.target.children[y].classList.length > 0){
          e.target.children[y].classList.remove(...e.target.children[y].classList);
        }
      }
      e.target.scrollTop = e.target.children[0].offsetHeight * col
      // add blur and color as in design
      e.target.children[col].classList.add("level3") 
      e.target.children[col + 1].classList.add("level2")
      // center element should be clearly seen
      e.target.children[col + 2].classList.add("level1")
      // as first 2 elements, last two elements should be blur 
      e.target.children[col+3].classList.add("level2")
      e.target.children[col+4].classList.add("level3")
      // time by default static value 70
    },70)
  }
  return{
    onScroll: e => scrollEvent(e)
  }
}

function generateNumbers(limitStart, limitEnd) {
  let number = ""
  for(let x = limitStart;x <= limitEnd;x++){
    if(x > limitEnd - 2 || x < limitStart + 2) number += `<span className="hide_it">${x}</span>`
    else  number += `<span>${x}</span>`
  }
  return {__html : number};
}

export default function ChooseDate(){
  const [height,setHeight] = useState(0);
  const [heightOfDate, setDateHeight] = useState(0);
  const ref = useRef(null);
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
                  <div className="number" style={setControllersHeight} dangerouslySetInnerHTML={generateNumbers(-1, 33)} {...chooseLogin()}>
                  </div>
                  <div className="month" style={setControllersHeight} {...chooseLogin()}>
                    <span className="hide_it" ref={ref}>January</span>
                    <span className="hide_it">February</span>
                    <span className="level1">January</span>
                    <span className="level2">February</span>
                    <span className="level3">March</span>
                    <span>April</span>
                    <span>May</span>
                    <span>June</span>
                    <span>July</span>
                    <span>August</span>
                    <span>September</span>
                    <span>October</span>
                    <span>November</span>
                    <span>December</span>
                    <span className="hide_it">Hrer</span>
                    <span className="hide_it">sda</span>
                  </div>
                  <div className="year" style={setControllersHeight} dangerouslySetInnerHTML={generateNumbers(1950, 2020)} {...chooseLogin()}>
                    
                  </div>
                </div>
                <div className="indicator" style={setIndicatorHeight}>
                  {
                    Array.from(1, 10).map(()=>{
                      return (
                        <span></span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
      </div>
    )
}