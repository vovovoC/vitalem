import '../../styles/button.scss'
export default function InfoClinics({blue,desc}){
    return( 
        <div className='infoClinics'>
            <a href = {
                    blue.includes('+7')
                    ?
                    'tel:'+blue
                    :
                    'mailto:'+blue
            } 
            className='blue'>{blue}</a>
            <br/>
            <span className='desc'>{desc}</span>
        </div>

    )
}