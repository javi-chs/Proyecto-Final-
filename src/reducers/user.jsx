const INITIAL_STATE = {
   token: localStorage.getItem("token") ||sessionStorage.getItem("token")||"",
   httpStatus:"",
   name:sessionStorage.getItem("userName")||""
}

const user = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEW_USER':
            return {
                ...state,
                //aki lo que tengo que hacer es mirar el HTTPSTATUS para saber si la op ha ido bien o mal
                // si bien vuelvo a /productos o de la que venga
                // si mal informar del fallo
            }
        case 'LOGIN_USER':
            return {
                ...state,
                token: action.payload.mytoken,
                name: action.payload.name
            }
        default:
            return state;
    }
}

export default user;