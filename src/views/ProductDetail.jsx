import React, {Component} from 'react';
import getProducts from '../services/getProducts';
import './style/prueba.scss'
import { Card } from 'antd';
import CustomProductForm from '../components/CustomProductForm'
import Header from "../components/Header"
const { Meta } = Card;


class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            product:null,
            productID: null,
            loaded: false
        }
        this.componentDidMount = this.getProduct;
    }

    async getProduct(){
        const CurrentId = this.props.match.params.id;
        if(CurrentId !==this.state.productID && this.state.loaded !== true){
            try{
               const result =await getProducts.getProductByID(CurrentId)
                this.setState({
                    product:result,
                    productID: result.id,
                    loaded: true
                })
            }
            catch(error){ console.log(error)}
        }
    }
    prueba(){
        console.log(this.props)
    }

    render(){
        const product = this.state.product;
        if(product){

            return(
                <div className="ProductDetail"> 
                    <Header  props = {this.props}/>
                    
                    
                    <div className="TopSection">
    
                        <div className="ProductGeneralInfo">
                           <Card
                                
                                key={product.id}
                                hoverable
                                bordered={false}
                                cover={
                                    <img
                                    className="product_img"
                                    src = {product.img_src}
                                    alt= {product.name}
                                    />
                                }
                           >
                               <Meta
                               className="MetaDescription"
                                title={product.name}
                                description={product.price + " €"}
                               />
                             
                           </Card>

                        </div>

                        <div className="customizeProduct">

                        
                            <CustomProductForm/>

                        </div>
    
    
                    </div>
                    
                    
                    
                    
                    
                    <div className="BottomSection">
                        <div className="ProductDescription">
                        <p>{product.description}</p>
                        </div>
                        <div>
                         <h4>Comprar Producto</h4>       
                        <button className="Button" onClick={()=>this.prueba()}>Ir a comprar</button>
                        </div>
                    </div>
    
                </div>
            );
        }


        else {
            return(
                <div>   
                    <h2>Cargando producto...</h2>

                </div>
            );
        }
    }

}

export default ProductDetail;