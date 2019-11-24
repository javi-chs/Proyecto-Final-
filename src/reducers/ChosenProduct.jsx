const INITIAL_STATE = {
   name: sessionStorage.getItem("Product_Name") || "",
   price: sessionStorage.getItem("Product_Price") || "",
   size: sessionStorage.getItem("Product_Size") || "",
   color: sessionStorage.getItem("Product_Color") || "",
   description: sessionStorage.getItem("Product_Description") || "",
}


const ChosenProduct = (state=INITIAL_STATE, action)=>{
            switch(action.type){
                case "CHOOSE_PRODUCT":{
                    return{
                        ...state,
                        name:action.payload.myname,
                        price:action.payload.myprice,
                        size:action.payload.mysize,
                        color:action.payload.mycolor,
                        description:action.payload.mydescription
                             }
                            
                            
                            }
                    
               
                default: return state;
        }
}

export default ChosenProduct