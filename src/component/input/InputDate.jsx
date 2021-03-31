import InputMask from "react-input-mask";
export default function InputDate(props){
    const {
        cb,
        placeholderText
    } = props
    return(
        <InputMask
        mask="99.99.9999"
        maskChar={null}
        onChange={(e)=>{
            cb(e)
        }}
        className='pickDate'
        placeholder={placeholderText}
      />
    )
}