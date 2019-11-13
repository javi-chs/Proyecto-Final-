import axios from 'axios'

class getProducts {
    constructor(){
        this.callsdone =0
    }
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
}

export default new getProducts();