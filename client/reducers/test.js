export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TEST':
            return state.concat([action.text])
        default:
            return state
    }
}