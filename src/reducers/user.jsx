const INITIAL_STATE = {
    id: 0,
    name: '',
    mail: '',
    password: ''
}

const user = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEW_USER':
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                mail: action.payload.mail,
                password: action.payload.password
            }
        default:
            return state;
    }
}

export default user;