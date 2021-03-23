import '../../styles/button.scss'
function Desc({nameAim,descAim,hel}){
    return(
       <div className='descn'>
            <div className='desc'>
            <span className={
                    hel ==='color' ? 'color' : 'colorNot'
            }>{nameAim}</span>
            <div className='p'>
                <span>
                {descAim}
                </span></div>
            </div>
       </div>
    )
}
export default Desc;