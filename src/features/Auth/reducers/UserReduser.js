let initialState = {
    login: '',
    password: '',
    name: 'Maksat',
    surname: 'Nurtay'
}

export default function UserReducer(state=initialState, action){
    switch(action.type){
        case 'CHANGE_LOGIN': {
            return Object.assign({}, state, {
                login: action.text
            })
        }
        case 'CHANGE_PASSWORD': {
            return Object.assign({}, state, {
                password: action.text
            })
        }
    }
    return state
}