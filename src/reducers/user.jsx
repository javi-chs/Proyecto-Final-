const INITIAL_STATE = {
   token:"",
   httpStatus:""
}

const user = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEW_USER':
            return {
                ...state,
                token: action.payload.token
            }
        case 'LOGIN_USER':
            return {
                ...state,
                token: action.payload.token
            }
        default:
            return state;
    }
}

export default user;