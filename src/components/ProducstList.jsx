import React from 'react';
import './style/ProductListStyle.scss'
import {Link} from 'react-router-dom';
import { Card } from 'antd';


const { Meta } = Card;

function ProductList({products}){
    
    return (
        <div className="ProductsList">
           {products.map((product)=>(
               <Card
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
                 <Link to= {"/producto/" + product.id}>
                  <Meta
                  className="MetaDescripcion"
                  title={product.name}
                  description={product.description}
                  />
                  </Link>
               </Card>
               ))}
               
          </div>    
               
               
             
    );
}

export default ProductList