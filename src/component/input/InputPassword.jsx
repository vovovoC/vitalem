function InputPassword(props){
    const {
        cb,
        nameV,
        placeholderText
    } = props
    return(
        <input 
            type='password' 
            placeholder = {placeholderText} 
            className='input'
            onChange={(e)=>{cb(e)}}
            name={nameV}
        />
    )
}
export default InputPassword;