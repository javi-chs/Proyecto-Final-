const INITIAL_STATE = {
    searchType:"",
    searchTag:"",
    searchBrand:"",
    searchCategory:""
}


const searchType = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "SEARCH_BY_ALL":{
            return{
                ...state,
                searchType:action.payload.searchAll,
                searchTag:action.payload.tag,
                searchBrand:action.payload.Brand,
                searchCategory:action.payload.Category
            }
            
        }
        case "SEARCH_BY_NAME":{
            return{
                ...state,
                searchType:action.payload.searchName,
                searchTag:action.payload.tag,
                searchBrand:action.payload.Brand,
                searchCategory:action.payload.Category
                            }
                            
                        }
        case "SEARCH_BY_BRAND":{
            return{
                 ...state,
                 searchType:action.payload.searchBrand,
                 searchTag:action.payload.tag,
                 searchBrand:action.payload.Brand,
                 searchCategory:action.payload.Category
                            }
                            
                        }
        case "SEARCH_BY_CATEGORY":{
            return{
                 ...state,
                 searchType:action.payload.searchCategory,
                 searchTag:action.payload.tag,
                 searchBrand:action.payload.Brand,
                 searchCategory:action.payload.Category
                            }
                            
                        }
                
                
                default: return state;
        }
}

export default searchType