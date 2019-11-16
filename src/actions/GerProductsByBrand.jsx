import getProducts from '../services/getProducts';

export const GetProductsByBrand=(brand)=>(dispatch)=>{
    getProducts.getProductByBrand(brand)
    .then(response=>{
        dispatch({
            type:"PRODUCTS_BY_BRAND",
            payload:{
                myproducts:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
