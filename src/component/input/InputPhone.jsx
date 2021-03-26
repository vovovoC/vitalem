import InputMask from "react-input-mask";
export default function InputPhone(props){
    const {
        cb,
        placeholderText,
        nameV
    } = props
    return(
        <InputMask
        mask="+7 999 999 99 99"
        autoFocus
        maskChar={null}
        onChange={(e)=>{
            cb(e)
        }}
        name={nameV}
        className='phone'
        placeholder={placeholderText}
      />
    )
}
