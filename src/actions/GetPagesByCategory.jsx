import getPages from "../services/getPages"

export const getPagesByCategory = (category)=>(dispatch)=>{
    getPages.getNumPagesByCategory(category)
    .then(response=>{
        dispatch({
            type:"PAGES_BY_CATEGORY",
            payload:{
                mypages:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}