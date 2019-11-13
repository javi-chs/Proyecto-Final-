import React, {Component} from "react";
import ProductsList from '../components/ProducstList'
import getProducts from '../services/getProducts' 
import './style/Products.scss';

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

     async FilterByBrand(Brand){
       try{
           const results = await getProducts.getProductByBrand(Brand);
           this.setState(
            {
                products: results,
                loaded:true 
            }
            );
       }
       catch(error){console.log(error)}
     }


render(){
    
    return(
        <div>
            <div className="BrandBanner">
                <div className="Jordan" onClick={()=>this.FilterByBrand("Jordan")}/>
                <div className="Adidas" onClick={()=>this.FilterByBrand("Adidas")}/>
                <div className="Fila"   onClick={()=>this.FilterByBrand("Fila")}/>
            </div>
            <h1>Productos</h1>
           <ProductsList  products={this.state.products} ></ProductsList>
           

             
           
        </div>

    );
}


}
export default Products


