import InputAnketa from '../../component/input/InputAnketa'
export default function Anketa3(){

    return(
        <div className='anketas'>
            <div className='texts'>
                <p>Вопрос 3 из 7</p>
                <span>Госпитализация в больницу за последние 2 года (указать причину)</span>
            </div>
            <div>
                <InputAnketa text='Причина госпитализации'/>
            </div>
            </div>

    )
}