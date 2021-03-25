import '../../styles/button.scss'
export default function BlueButton({name}){
    return(
        <input type='submit' value={name} className={(name==='Начать диагностику'||name==='Записаться на прием')?'buttonRedSubmit input':'buttonBlueSubmit input'}/>
    )
}