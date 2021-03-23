import '../../styles/button.scss'
function InputText(props){
    const {
        cb,
        placeholderText,
        nameV
    } = props
    return(
        <input 
            type='text' 
            placeholder = {placeholderText} 
            className='input'
            name={nameV}
            onChange={(e)=>{
                    cb(e)
            }}
        />
    )
}
export default InputText;