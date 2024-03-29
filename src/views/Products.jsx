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
import {GetProductsByCategory} from '../actions/GetProductsByCategory'
//tipo de busqueda
import {searchByAll} from "../actions/SearchByAll"
import {searchByBrand} from "../actions/SearchByBrand"
import {searchByName} from "../actions/SearchByName"
import {searchByCategory} from "../actions/SearchByCategory"
//paginas
import {getPagesByAll} from "../actions/GetPagesByAll"
import {getPagesByBrand} from "../actions/GetPagesByBrand"
import {getPagesByName} from "../actions/GetPagesByName"
import {getPagesByCategory} from "../actions/GetPagesByCategory"
//COMPONENTS
import Header from "../components/Header"
import Pages from "../components/Pages"

class Products extends Component{
  
    constructor(props){
        super(props);
        
             this.componentDidMount = ()=>{
                console.log("Productos Mount")
                console.log(this.props)
                 this.loadProducts()
                
               
               } 
               this.componentDidUpdate = ()=>{
                //console.log("Productos Update")
                //console.log(this.props)
                
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

   async FilterByCategory(category){
      this.props.SearchByCategory(category)
      await this.props.GetPagesByCategory(category)
      await this.props.ProductsByCategory(category,1)
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
            <div className="TypeSearching">
              <button className="TypeButton" onClick={()=>this.FilterByCategory("Camisetas")}>Camisetas</button>
              <button className="TypeButton" onClick={()=>this.FilterByCategory("Sudaderas")}>Sudaderas</button>
              <button className="TypeButton" onClick={()=>this.FilterByCategory("Gorros")}>Gorros</button>
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
    searchBrand:state.searchType.searchBrand,
    searchCategory: state.searchType.searchCategory
  })
  
  const mapDispatchToProps = dispatch => ({
    //Acciones de productos
    Allproducts: (page) => dispatch(GetAllProducts(page)),
    ProductsByBrand: (brand,page) => dispatch(GetProductsByBrand(brand,page)),
    ProductsByName: (name,page) => dispatch(GetProductsByName(name,page)),
    ProductsByCategory:(category,page) => dispatch(GetProductsByCategory(category,page)),
    //Acciones de tipo de busqueda
    SearchByBrand: (Brand)=> dispatch(searchByBrand(Brand)),
    SearchByAll: ()=>dispatch(searchByAll()),
    SearchByName:(tag)=> dispatch(searchByName(tag)),
    SearchByCategory:(category) => dispatch(searchByCategory(category)),
    //Acciones de pages
    GetPagesByAll:()=> dispatch(getPagesByAll()),
    GetPagesByBrand:(brand)=>dispatch(getPagesByBrand(brand)),
    GetPagesByName:(tag)=>dispatch(getPagesByName(tag)),
    GetPagesByCategory:(category)=>dispatch(getPagesByCategory(category)),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Products)

