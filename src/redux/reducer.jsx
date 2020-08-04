const init = {
    totalValue: 0,
    size: 0
}
export default (state = init, action) => {
    switch (action.type) {
        case "increment":
            return Object.assign({}, state, action, {
                totalValue: state.totalValue + 1
            });
        case "decrement":
            return Object.assign({}, state, action, {
                totalValue: state.totalValue - 1
            });
        case "resize":
            return Object.assign({}, state, action, {
                size: action.payload,
                totalValue: 0
            })
        case "changeTotalValue":
            return Object.assign({}, state, action, {
                totalValue: state.totalValue - action.payload
            })
        default:
            return state;
    }
};