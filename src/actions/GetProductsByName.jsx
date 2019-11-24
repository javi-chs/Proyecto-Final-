import getProducts from '../services/getProducts'

export const GetProductsByName=(name,page)=>(dispatch)=>{
   
    getProducts.getProductsByName(name,page)
    .then(response=>{
        dispatch({
            type:"PRODUCTS_BY_NAME",
            payload:{
                myproducts:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
