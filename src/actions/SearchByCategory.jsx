export const searchByCategory=(category)=>(dispatch)=>{
    
    
    dispatch({
        type:"SEARCH_BY_CATEGORY",
        payload:{
            searchCategory:"Category",
            tag:"",
            Brand:"",
            Category:category
        }
    })

}