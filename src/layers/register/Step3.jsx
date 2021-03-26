import Heading from '../../component/heading/Heading'
import Gender from '../../component/choose/gender/Gender'
export default function Step3(){
    return(
        <div className='registerBody'>
            <div className='headingSignin'>
            <Heading name='Выберите пол '/>
            </div>
            <Gender/>
        </div>   
    )
}