export const chooseProduct=(name,price,size,color,description)=>(dispatch)=>{
            
            sessionStorage.setItem("Product_Name",name)
            sessionStorage.setItem("Product_Price",price)
            sessionStorage.setItem("Product_Size",size)
            sessionStorage.setItem("Product_Color",color)
            sessionStorage.setItem("Product_Description",description)
    
    dispatch({
        type:"CHOOSE_PRODUCT",
        payload:{
            myname:name,
            myprice:price,
            mysize:size,
            mycolor:color,
            mydescription:description

        }
    })

}
