import React, {Component} from "react";
import axios from 'axios'
import ProductsList from '../components/ProducstList'
import getProducts from '../services/getProducts' 

class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
            loaded:false
            }
             this.componentDidMount = ()=>{
                console.log("EL componente de productos se ha montado")
                this.getProducts();

            }

           


            
        }

         
     
        async getProducts(){
            const isloaded = this.state.loaded;
            
            if(!isloaded){
                try{
                    const results = await getProducts.getAllProducts();
                    console.log("Lo que me devuelve la llamada")
                    console.log(results)
                    this.setState(
                        {
                            products: results,
                            loaded:true 
                        }
                        );
                }
                catch(error){console.log(error)}
                    }
     }   




render(){
    
    return(
        <div>
            <h1>Productos</h1>
           <ProductsList  products={this.state.products} ></ProductsList>
           

             
           
        </div>

    );
}


}
export default Products


