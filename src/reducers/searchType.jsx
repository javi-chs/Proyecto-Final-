const INITIAL_STATE = {
    searchType:"",
    searchTag:"",
    searchBrand:""
}


const searchType = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "SEARCH_BY_ALL":{
            return{
                ...state,
                searchType:action.payload.searchAll,
                searchTag:action.payload.tag,
                searchBrand:action.payload.Brand
                
            }
            
        }
        case "SEARCH_BY_NAME":{
            return{
                ...state,
                searchType:action.payload.searchName,
                searchTag:action.payload.tag,
                searchBrand:action.payload.Brand
                            }
                            
                        }
        case "SEARCH_BY_BRAND":{
            return{
                 ...state,
                 searchType:action.payload.searchBrand,
                 searchTag:action.payload.tag,
                 searchBrand:action.payload.Brand
                            }
                            
                        }
                
                
                default: return state;
        }
}

export default searchType