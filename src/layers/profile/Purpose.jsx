import '../../styles/button.scss'
import Thing from "./Thing";
import thing1 from '../../images/thing1.svg'
import RegisterNavbar from '../../component/navbar/RegisterNavbar'
function Purpose(){
    const arr1=[
        'Поливитамины',
        'Лозап',
        'Танакан',
        'Цераксон',
        'Физиотенз'
    ]
    const arr2=[
        '3 капли',
        '1 капсула',
        '1 таблетка',
        '1 таблетка',
        '0.2 мг'
    ]
    const arr3=[
        'утром до еды',
        'утром до еды',
        'вечером во время еды',
        'вечером во время еды',
        'вечером во время еды'
    ]
    const imgs=[
        thing1,
        thing1,
        thing1,
        thing1,
        thing1  
    ]
    return(
        <div className='register'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 container'>
            <RegisterNavbar name='Рекомендации врача'/>
            <div className='profile'>
            <div className='backGround'>
               {
                arr1.map((el,i)=>(
                    <div key={i}>
                        <Thing thing={imgs[i]} nameT={arr1[i]} timeT={arr2[i]} howManyT={arr3[i]}/>
                    </div>
                ))
            }
             </div>
            </div>      
        </div>
        </div>
        </div>
    )
}
export default Purpose;