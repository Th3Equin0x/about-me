const activeTabReducer = (state = "home", action) => {
    switch(action.type){
        case 'TAB':
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default activeTabReducer;