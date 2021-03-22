function InputPassword(props){
    const {
        nameV,
        placeholderText
    } = props
    return(
        <input 
            type='password' 
            placeholder = {placeholderText} 
            className='input'
            name={nameV}
        />
    )
}
export default InputPassword;