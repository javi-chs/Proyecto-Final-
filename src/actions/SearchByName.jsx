export const searchByName=(tag)=>(dispatch)=>{
    
    
    dispatch({
        type:"SEARCH_BY_NAME",
        payload:{
            searchName:"Name",
            tag:tag,
            Brand:"",
            Category:""
        }
    })

}
