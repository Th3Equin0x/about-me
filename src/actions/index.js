export const increment = (value = 1) => {
    return {
        type: 'INCREMENT',
        payload: value
    }
}
export const decrement = (value = 1) => {
    return {
        type: 'DECREMENT',
        payload: value
    }
}
export const updateTab = (value = "home") => {
    return{
        type: 'TAB',
        payload: value
    }
}