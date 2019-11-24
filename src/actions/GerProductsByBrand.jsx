import getProducts from '../services/getProducts';

export const GetProductsByBrand=(brand,page)=>(dispatch)=>{
    getProducts.getProductByBrand(brand,page)
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
