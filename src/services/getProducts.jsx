import axios from 'axios'

class getProducts {
    constructor(){
        this.callsdone =0
    }
    async getAllProducts(){
        const {data} = await axios.get("http://localhost:8080/api/v1/products")
        return data;
    }
}

export default new getProducts();