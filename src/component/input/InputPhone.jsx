import InputMask from "react-input-mask";
export default function InputPhone({ 
    placeholderText,
    cb,
    nameV}){
    return(
        <InputMask
        mask="+7 999 999 99 99"
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
