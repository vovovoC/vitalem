import InputMask from "react-input-mask";
export default function InputNumber(props){
    const {
        cb,
        placeholderText
    } = props
    return(
        <InputMask
        maskChar={null}
        onChange={(e)=>{
            cb(e)
        }}
        className='pickNumber'
        placeholder={placeholderText}
      />
    )
}