import { useState } from 'react'
import s from './counter.style.module.css'


export const Counter=()=>{

const [count, setCount] = useState<number>(0);

const addButton =()=>{
    setCount(count+1)
}

const resetButton=()=>{
    setCount(0)
}



    return(
        <div>
            <div className={s.number}>{count}</div>
            <button className={s.addButton} onClick={addButton}>add</button>
            <button className={s.resetButton} onClick={resetButton}>reset</button>
        </div>
    )
}