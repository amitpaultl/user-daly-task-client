import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConster"

export const incrementCounter = () =>{
    return{
        type : INCREMENT
    }
}

export const decrementCounter = () =>{
    return{
        type : DECREMENT
    }
}

export const restCounter = () =>{
    return{
        type : RESET
    }
}