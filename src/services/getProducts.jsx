import axios from 'axios'

class getProducts {
  
   
    async getAllProducts(){
        const {data} = await axios.get("http://localhost:8080/api/v1/products")
        return data;
    }
    async getProductByID(id){
        const {data} = await axios.get("http://localhost:8080/api/v1/products/" + id)
        console.log(data);
        return data;
    }

    async getProductByBrand(Brand){
        const {data} = await axios.get("http://localhost:8080/api/v1/products/brands/"+Brand)
        return data;
    }
    async getProductsByName(myname){
       
        const{data} = await axios.post("http://localhost:8080/api/v1/products/name",{name:myname});
        return data;
    }
}

export default new getProducts();