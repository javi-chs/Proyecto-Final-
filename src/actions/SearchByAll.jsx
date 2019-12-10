

export const searchByAll=()=>(dispatch)=>{
    
    
        dispatch({
            type:"SEARCH_BY_ALL",
            payload:{
                searchAll:"All",
                tag:"",
                Brand:"",
                Category:""
            }
        })
   
    }
