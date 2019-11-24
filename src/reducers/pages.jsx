
const INITIAL_STATE = {
    pages:[]
}


const pages = (state=INITIAL_STATE, action)=>{
            switch(action.type){
                case "PAGES_BY_ALL":{
                    return{
                        ...state,
                        pages:action.payload.mypages,
                             }
                    
                        }
                case "PAGES_BY_NAME":{
                    return{
                        ...state,
                        pages:action.payload.mypages
                            }
                            
                        }
                case "PAGES_BY_BRAND":{
                    return{
                        ...state,
                        pages:action.payload.mypages
                            }
                            
                        }
                
                
                default: return state;
        }
}

export default pages