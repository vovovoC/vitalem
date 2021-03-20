import '../../styles/button.scss'
function InputText({name}){
    return(
        <input type='text' placeholder = {name} className='input '/>
    )
}
export default InputText;