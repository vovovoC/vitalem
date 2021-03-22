import '../../styles/button.scss'
function DisType({nameDis}){
    return(
        <div className='dis'>
        <div className='headerName'>
        <div className='row align-items-center'>
              <div className='col-11'>
                    <span className={nameDis==='Выйти из профиля'?'nameRed':'name'}>{nameDis}</span>
              </div>
              <div className='col-1'>
              <i className="fa fa-angle-right"></i>
              </div>
          </div>
        </div>
            </div>
)}
export default DisType;