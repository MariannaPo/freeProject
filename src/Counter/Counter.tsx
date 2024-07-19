import { ChangeEvent, useState } from 'react'
import s from './counter.style.module.css'



export const Counter=()=>{

    const [count, setCount] = useState<number>(0);
    const [inputValue, setInputValue] = useState<any>()



const addButton =()=>{
    setInputValue(setCount(count+1))
    
}

const resetButton=()=>{
    setCount(0)
}

const inpValue=(event: ChangeEvent<HTMLInputElement>)=>{
   const value =  parseInt(event.currentTarget.value)
   setInputValue(value)
    console.log(value)
}


    return(
        <>
        <div>
            <div>{count}</div>
            <button onClick={addButton}>add</button>
            <button  onClick={resetButton}>reset</button>
        </div>
        <div style={{paddingTop: '45px'}}>
         <input type='text' placeholder='Start value'              
            onChange={inpValue}
/>
          <input type='text' placeholder='Max value'/>
          <button>start</button>
        </div>
        </>
        

    )
}