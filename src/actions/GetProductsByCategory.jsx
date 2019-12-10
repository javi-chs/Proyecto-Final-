import getProducts from '../services/getProducts'

export const GetProductsByCategory=(category,page)=>(dispatch)=>{
   
    getProducts.getProductsByCategory(category,page)
    .then(response=>{
        dispatch({
            type:"PRODUCTS_BY_CATEGORY",
            payload:{
                myproducts:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
