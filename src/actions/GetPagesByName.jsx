import getPages from "../services/getPages"

export const getPagesByName = (tag)=>(dispatch)=>{
    getPages.getNumPagesByName(tag)
    .then(response=>{
        dispatch({
            type:"PAGES_BY_NAME",
            payload:{
                mypages:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
