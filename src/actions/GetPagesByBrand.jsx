import getPages from "../services/getPages"

export const getPagesByBrand = (brand)=>(dispatch)=>{
    getPages.getNumPagesByBrand(brand)
    .then(response=>{
        dispatch({
            type:"PAGES_BY_BRAND",
            payload:{
                mypages:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
