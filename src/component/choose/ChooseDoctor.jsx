import '../../styles/doctor.scss'
export default function ChooseDoctor({name,photo,prof}){
    return(
        <div className='row align-items-center'>
            <div className='col-3'>
                <img src={photo} alt={name}/>
            </div>
            <div className='col-9'>
                <span>{name}</span>
                <br/>
                <span>{prof}</span>
            </div>
        </div>
    )
}