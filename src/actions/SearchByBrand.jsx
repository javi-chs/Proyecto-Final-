export const searchByBrand=(brand)=>(dispatch)=>{
    
   
    dispatch({
        type:"SEARCH_BY_BRAND",
        payload:{
            searchBrand:"Brand",
            tag:"",
            Brand:brand
        }
    })

}