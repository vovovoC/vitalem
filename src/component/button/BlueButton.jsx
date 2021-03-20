import '../../styles/button.scss'
export default function BlueButton({name}){
    return(
        <input type='submit' value={name} className='buttonBlueSubmit input'/>
    )
}