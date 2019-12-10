import axios from 'axios'

class getPages{
     BASE_URL = "http://localhost:8080/api/v1/products/page/all"
    async getNumPagesByAll(){
        var numPages = await axios.get("http://localhost:8080/api/v1/products/pages/all")
        return numPages.data;
    }
    async getNumPagesByName(name){
        var numPages= await axios.get("http://localhost:8080/api/v1/products/pages/name/" + name)
        return numPages.data;
    }
    async getNumPagesByCategory(category){
        var numPages= await axios.get("http://localhost:8080/api/v1/products/pages/category/" + category)
        return numPages.data;
    }
    async getNumPagesByBrand(brand){
        var numPages= await axios.get("http://localhost:8080/api/v1/products/pages/brand/" + brand)
        return numPages.data;
    }

}
export default new getPages();