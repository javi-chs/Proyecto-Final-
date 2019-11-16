import React, {Component} from "react";
import ProductsList from '../components/ProducstList'
import './style/Products.scss';
//REDUX//
import { connect } from 'react-redux';
import {GetProductsByBrand} from '../actions/GerProductsByBrand'
import {GetProductsByName} from '../actions/GetProductsByName'
import {GetAllProducts} from '../actions/GetAllProducts'
class Products extends Component{

    constructor(props){
        super(props);
        
             this.componentDidMount = ()=>{
                 this.loadProducts()
                 
                  
               
                   }

                   this.componentDidUpdate=()=>{
                  
                   }
           
    }


        async loadProducts(){
          await this.props.Allproducts();
        }
        
         
     
        async FilterByBrand(brand){
            await this.props.ProductsByBrand(brand)
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
             
             <ProductsList/>
           
        </div>

    );
}


}
const mapStateToProps = state => ({
    productos: state.products.products
  })
  
  const mapDispatchToProps = dispatch => ({
    Allproducts: () => dispatch(GetAllProducts()),
    ProductsByBrand: (brand) => dispatch(GetProductsByBrand(brand)),
    ProductsByName: () => dispatch(GetProductsByName())

  })


export default connect(mapStateToProps,mapDispatchToProps)(Products)

