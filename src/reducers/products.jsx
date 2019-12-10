// Establecemos el estado inicial del reducer
const INITIAL_STATE = {
    products:[],
    page:"1"
}

// Aqui es donde establecemos el reducer, que recibe un estado, el inicial y una accion que lo cambiara.
const products = (state=INITIAL_STATE, action)=>{
            switch(action.type){
                case "ALL_PRODUCTS":{
                    return{
                        ...state,
                        products:action.payload.myproducts,
                        page: action.payload.mypage
                            }
                    
                        }
                case "PRODUCTS_BY_NAME":{
                    return{
                        ...state,
                        products:action.payload.myproducts
                            }
                            
                        }
                case "PRODUCTS_BY_BRAND":{
                    return{
                        ...state,
                        products:action.payload.myproducts
                            }
                            
                        }
                case "PRODUCTS_BY_CATEGORY":{
                    return{
                        ...state,
                        products:action.payload.myproducts
                            }
                                    
                        }
                
                
                default: return state;
        }
}

export default products