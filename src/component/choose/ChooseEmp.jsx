import '../../styles/button.scss'
export default function ChooseEmp({name,prof,image}){
    return(
       <div className='chooseEmp'>
            <div className='row align-items-center'>
            <div className='col-2'>
                <img src={image} alt={name}/>
            </div>
            <div className='col-10'>
                <span className='name'>{name}</span><br/>
                <span className='prof'>{prof}</span>
            </div>
        </div>
       </div>
    )
}