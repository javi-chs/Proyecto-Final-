import axios from 'axios'

class getProducts {
    
   
    async getAllProducts(page){ 
        const {data} = await axios.get("http://localhost:8080/api/v1/products/page/"+ page)
        return data;
    }
    async getProductByID(id){
        const {data} = await axios.get("http://localhost:8080/api/v1/products/" + id)
       
        return data;
    }

    async getProductByBrand(Brand,page){ 
        const {data} = await axios.get("http://localhost:8080/api/v1/products/brands/"+Brand+"/page/" + page)
        return data;
    }
    async getProductsByName(myname,page){
       
        const{data} = await axios.post("http://localhost:8080/api/v1/products/name/"+ page,{name:myname});
        return data;
    }

    async getProductsByCategory(myCategory,page){
        const {data} = await axios.get("http://localhost:8080/api/v1/products/category/"+myCategory+"/page/" + page)
        return data;
        
    }
}

export default new getProducts();