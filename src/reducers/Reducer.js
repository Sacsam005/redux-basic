const initialState = 0;

const changeNum = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payLoad;
        case "DECREMENT": return state - action.payLoad;
        default: return state;
    }
}

export default changeNum;