import getPages from "../services/getPages"

export const getPagesByAll = ()=>(dispatch)=>{
    getPages.getNumPagesByAll()
    .then(response=>{
        dispatch({
            type:"PAGES_BY_ALL",
            payload:{
                mypages:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
