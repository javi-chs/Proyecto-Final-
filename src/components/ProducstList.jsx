import React from 'react';
import './style/ProductListStyle.scss'
import {Link} from 'react-router-dom';
import { Card } from 'antd';

import { connect } from 'react-redux';
import {GetProductsByBrand} from '../actions/GerProductsByBrand'
import {GetProductsByName} from '../actions/GetProductsByName'
import {GetAllProducts} from '../actions/GetAllProducts'

const { Meta } = Card;

function ProductList(props){
   const products = props.productos
   
   if(products!==null && props.productos.length!=0){
     
    return (
        <div className = "ProductsList">
         {products.map((product)=>(
           product.colors.map((color)=>(
            <Link className="Link" to= {"/producto/" + product.id}>
            <Card
                    className="Product"
                    key={color.id}
                    hoverable
                    bordered={false}
                    cover={
                        <img
                        className="ProductImage"
                        src = {color.img_src}
                        alt= {product.name}
                        />
                    }
              > 
              <Meta
                  className="MetaDescripcion"
                  title={product.name}
                  description={product.price + " €"}
                  />

              </Card>
            </Link>
           ))
         ))}
        </div>

               
               
             
    );}
    else{
      return(
        <div className = "ProductsNotFound">
          <h1>No hemos encontrado los productos que buscas</h1>
        </div>
      

      );
}
}
const mapStateToProps = state => ({
    productos: state.products.products
  })
  
  const mapDispatchToProps = dispatch => ({
    Allproducts: () => dispatch(GetAllProducts()),
    ProductsByBrand: () => dispatch(GetProductsByBrand()),
    ProductsByName: () => dispatch(GetProductsByName())

  })

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)