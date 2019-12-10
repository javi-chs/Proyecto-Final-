import React, {Component} from 'react'
import "./style/pagesStyle.scss"
import {connect} from "react-redux"
import {GetAllProducts} from "../actions/GetAllProducts"
import {GetProductsByBrand} from "../actions/GerProductsByBrand"
import {GetProductsByName} from "../actions/GetProductsByName"
import {GetProductsByCategory} from "../actions/GetProductsByCategory"
class Pages extends Component{
    constructor(props){
        super(props)
        
    }
    async newPage(page){
       
        switch(this.props.searchType){
            case "All":{
               
                await this.props.Allproducts(page);break;}
            case "Brand":{
                
                await this.props.ProductsByBrand(this.props.searchBrand,page);break;}
            case "Name":{
               
                await this.props.ProductsByName(this.props.searchTag,page);break;}

            case "Category":{
               
                await this.props.ProductsByCategory(this.props.searchCategory,page);break;}

        }
        
    }
 
    render(){
        return(
            <div className="PagesContainer">
              
                <div className="pages">
                    <h4>{"<"}</h4>
                    {this.props.pages.map((page)=>(
                        <h4 key={page}className="numbers" onClick={(ev)=>this.newPage(ev.target.textContent)}>{page}</h4>
                    ))}

                <h4>{">"}</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pages: state.pages.pages,
    searchType:state.searchType.searchType,
    searchTag:state.searchType.searchTag,
    searchBrand:state.searchType.searchBrand,
    searchCategory: state.searchType.searchCategory
   
  })
  
  const mapDispatchToProps = dispatch => ({
    Allproducts: (page) => dispatch(GetAllProducts(page)),
    ProductsByBrand: (brand,page) => dispatch(GetProductsByBrand(brand,page)),
    ProductsByName: (name, page) => dispatch(GetProductsByName(name,page)),
    ProductsByCategory:(category,page) => dispatch(GetProductsByCategory(category,page))

  })

export default connect(mapStateToProps,mapDispatchToProps)(Pages);