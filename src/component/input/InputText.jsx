import '../../styles/button.scss'
function InputText(props){
    const {
        cb,
        placeholderText
    } = props
    return(
        <input 
            type='text' 
            placeholder = {placeholderText} 
            className='input'
            onChange={(e)=>{
                    cb(e)
            }}
        />
    )
}
export default InputText;