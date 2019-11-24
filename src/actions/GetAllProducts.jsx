import getProducts from '../services/getProducts'

export const GetAllProducts=(page)=>(dispatch)=>{
    getProducts.getAllProducts(page)
    .then(response=>{
        dispatch({
            type:"ALL_PRODUCTS",
            payload:{
                myproducts:response,
                mypage:page
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
