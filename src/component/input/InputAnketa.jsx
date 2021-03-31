export default function InputAnketa({text,cb}){
    return(
            <input 
              type='text'
              name='anketa' 
              placeholder={text}
              className='input'
              onChange={(e)=>{cb(e)}}
            />
    )
}