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
    return (
        
<div className="ProductsList">
           {products.map((product)=>(
                <Link className="Link" to= {"/producto/" + product.id}>
               <Card
                    className="Product"
                    key={product.id}
                    hoverable
                    bordered={false}
                    cover={
                        <img
                        className="ProductImage"
                        src = {product.img_src}
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
               ))}
               
          </div>  
               
               
             
    );
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