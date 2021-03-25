export default function InputAnketa({text}){
    return(
      <div className='anketaText'>
             <textarea oninput="this.parentNode.dataset.value = this.value" rows="1" placeholder="hi"></textarea>
      </div>
    )
}