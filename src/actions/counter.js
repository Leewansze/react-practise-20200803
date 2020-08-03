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