import React, {Component} from 'react'
import "./style/pagesStyle.scss"
import {connect} from "react-redux"
import {GetAllProducts} from "../actions/GetAllProducts"
import {GetProductsByBrand} from "../actions/GerProductsByBrand"
import {GetProductsByName} from "../actions/GetProductsByName"
class Pages extends Component{
    constructor(props){
        super(props)
        
    }
    async newPage(page){
       
        switch(this.props.searchType){
            case "All":{await this.props.Allproducts(page)}
            case "Brand":{await this.props.ProductsByBrand(this.props.searchBrand,page)}
            case "Name":{await this.props.ProductsByName(this.props.searchTag,page)}
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
   
  })
  
  const mapDispatchToProps = dispatch => ({
    Allproducts: (page) => dispatch(GetAllProducts(page)),
    ProductsByBrand: (brand,page) => dispatch(GetProductsByBrand(brand,page)),
    ProductsByName: (name, page) => dispatch(GetProductsByName(name,page))

  })

export default connect(mapStateToProps,mapDispatchToProps)(Pages);