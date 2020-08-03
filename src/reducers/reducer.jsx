import {ADD_TOTAL,REDUCE_TOTAL} from '../actions/counter'
const initState = 0
export default (state = initState, action) => {
    switch (action.type){
        case ADD_TOTAL:
            return state + action.payload
        case REDUCE_TOTAL:
            return state + action.payload
        default:
            return state
    }
}