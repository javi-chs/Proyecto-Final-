import React, {Component} from "react";
import ProductsList from '../components/ProducstList'
import './style/Products.scss';
//REDUX//
import { connect } from 'react-redux';
import {GetProductsByBrand} from '../actions/GerProductsByBrand'
import {GetProductsByName} from '../actions/GetProductsByName'
import {GetAllProducts} from '../actions/GetAllProducts'
import Header from "../components/Header"
class Products extends Component{
  
    constructor(props){
        super(props);
        
             this.componentDidMount = ()=>{
               
                 this.loadProducts()
                 console.log("Props en el mount")
                  console.log(this.props)
               
                   }

                  
    }


        async loadProducts(){
          await this.props.Allproducts();
        }
        
         
     
        async FilterByBrand(brand){
            await this.props.ProductsByBrand(brand)
        }

     
render(props){
  
  console.log("esto vale props en el render")
    console.log(this.props)
    return(
        <div>
          <Header props = {this.props}/>
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

