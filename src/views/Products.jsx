import React, {Component} from "react";
import ProductsList from '../components/ProducstList'
import './style/Products.scss';
//REDUX//
import { connect } from 'react-redux';
//ACTIONS
//Productos
import {GetProductsByBrand} from '../actions/GerProductsByBrand'
import {GetProductsByName} from '../actions/GetProductsByName'
import {GetAllProducts} from '../actions/GetAllProducts'
//tipo de busqueda
import {searchByAll} from "../actions/SearchByAll"
import {searchByBrand} from "../actions/SearchByBrand"
import {searchByName} from "../actions/SearchByName"
//paginas
import {getPagesByAll} from "../actions/GetPagesByAll"
import {getPagesByBrand} from "../actions/GetPagesByBrand"
import {getPagesByName} from "../actions/GetPagesByName"
//COMPONENTS
import Header from "../components/Header"
import Pages from "../components/Pages"

class Products extends Component{
  
    constructor(props){
        super(props);
        
             this.componentDidMount = ()=>{
               
                 this.loadProducts()
                
               
               } 
               this.componentDidUpdate = ()=>{
               
                
              } 
     }

    async loadProducts(){
      this.props.SearchByAll()
      await this.props.GetPagesByAll()
      await this.props.Allproducts(1)
    }

    async FilterByBrand(brand){
            this.props.SearchByBrand(brand)
            await this.props.GetPagesByBrand(brand)
            await this.props.ProductsByBrand(brand,1)
        }

   

     
render(){
  
 
    return(
        <div className="ProductsPage">
          <Header props = {this.props}/>
            <div className="BrandBanner">
                <div className="Jordan" onClick={()=>this.FilterByBrand("Jordan")}/>
                <div className="Adidas" onClick={()=>this.FilterByBrand("Adidas")}/>
                <div className="Fila"   onClick={()=>this.FilterByBrand("Fila")}/>
            </div>
           
            <h1 className="Tittle">Productos</h1>
             
             <ProductsList/>
            <Pages></Pages>
        </div>

    );
}


}
const mapStateToProps = state => ({
    productos: state.products.products,
    page:state.products.page,
    searchType:state.searchType.searchType,
    searchTag:state.searchType.searchTag,
    searchBrand:state.searchType.searchBrand
  })
  
  const mapDispatchToProps = dispatch => ({
    //Acciones de productos
    Allproducts: (page) => dispatch(GetAllProducts(page)),
    ProductsByBrand: (brand,page) => dispatch(GetProductsByBrand(brand,page)),
    ProductsByName: (name,page) => dispatch(GetProductsByName(name,page)),
    //Acciones de tipo de busqueda
    SearchByBrand: (Brand)=> dispatch(searchByBrand(Brand)),
    SearchByAll: ()=>dispatch(searchByAll()),
    SearchByName:(tag)=> dispatch(searchByName(tag)),
    //Acciones de pages
    GetPagesByAll:()=> dispatch(getPagesByAll()),
    GetPagesByBrand:(brand)=>dispatch(getPagesByBrand(brand)),
    GetPagesByName:(tag)=>dispatch(getPagesByName(tag))
  })


export default connect(mapStateToProps,mapDispatchToProps)(Products)

