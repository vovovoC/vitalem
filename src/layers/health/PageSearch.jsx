import '../../styles/button.scss'
import Search from '../../component/input/Search'
import {useHistory} from 'react-router-dom'
export default function PageSearch(){
    const{goBack}  = useHistory()
    return(
        <div className='searchpage'>
            <div className='searchdiv'>
                <Search searchName='Поиск'/>
                <span className='searchClose' onClick={goBack}>Отмена</span>
            </div>
        </div>
    )
}