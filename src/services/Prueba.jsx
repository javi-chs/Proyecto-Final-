import React from'react'
import axios from 'axios'

class Prueba{

    async getProducts(){
    
    var data = await axios.get("http://localhost:8080/api/v1/products/category/juegos")
    console.log(data)
}



}
export default Prueba