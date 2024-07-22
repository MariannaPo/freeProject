import { ChangeEvent, useState } from 'react'
import s from './counter.style.module.css'



export const Counter=()=>{

    const [count, setCount] = useState<number>(0);
    const [inputValue, setInputValue] = useState<any>();
    const [inputMaxValue, setInputMaxValue] = useState<any>();
    const [disableButton, setDisableButton] = useState<boolean>(false);



const addButton =()=>{
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= inputMaxValue) {
        setDisableButton(true);
    }
    
}
const resetButton=()=>{
    setCount(0);
    setDisableButton(false)
}

const inpValue=(event: ChangeEvent<HTMLInputElement>)=>{
   const value =  parseInt(event.currentTarget.value)
   setInputValue(value)
    console.log(value)
}

const inpMaxValue=(event: ChangeEvent<HTMLInputElement>)=>{
    const value =  parseInt(event.currentTarget.value)
    setInputMaxValue(value)
     console.log(value)
 }


 const startButtonHandler=()=>{
    if(inputValue >= inputMaxValue){
        setDisableButton(true)
        alert('"Максимальное число должно быть больше или равно текущему значению счетчика.')
    }else{
        setCount(inputValue)
    }
 }
    return(
        <>
        <div>
            <div>{count}</div>
            <button onClick={addButton} disabled={disableButton}>add</button>
            <button  onClick={resetButton}>reset</button>
        </div>
        <div style={{paddingTop: '45px'}}>
         <input type='text' placeholder='Start value'              
            onChange={inpValue}
/>
          <input type='text' placeholder='Max value' onChange={inpMaxValue}/>
          <button onClick={startButtonHandler} disabled={disableButton}>start</button>
        </div>
        </>
        

    )
}