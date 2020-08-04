export const ADD_TOTAL = "ADD_TOTAL";
export const REDUCE_TOTAL = "REDUCE_TOTAL";
export function onIncrease(){
    return{
        type: "ADD_TOTAL",
        payload: 1
    }
}
export function onDecrease(){
    return{
        type: "REDUCE_TOTAL",
        payload: -1
    }
}