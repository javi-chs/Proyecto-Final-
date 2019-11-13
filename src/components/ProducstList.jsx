import React from 'react';
import './style/ProductListStyle.scss'
import {Link} from 'react-router-dom';
import { Card } from 'antd';


const { Meta } = Card;

function ProductList({products}){
    
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

export default ProductList