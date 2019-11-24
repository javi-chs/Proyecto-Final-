import React, {Component} from 'react';
import getProducts from '../services/getProducts';
import './style/ProductDetail.scss'
import { Card } from 'antd';
import Header from "../components/Header"
import {connect} from "react-redux"
import {chooseProduct} from "../actions/ChooseProduct"

const { Meta } = Card;


class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            product:null,
            productID: null,
            loaded: false,
            color:"",
            size:""
        }
        this.componentDidMount = this.getProduct();
    }

    async getProduct(){
        const CurrentId = this.props.match.params.id;
        if(CurrentId !==this.state.productID && this.state.loaded !== true){
            try{
               const result =await getProducts.getProductByID(CurrentId)
                
                this.setState({
                    product:result,
                    productID: result.id,
                    loaded: true,
                    color: result.colors[0].img_src,
                    size: result.sizes[0].value
                })
            }
            catch(error){ console.log(error)}
        }
    }
    setColor(color){
        this.setState({
            ...this.state,
            color:color
        })
    }

    setSize(size){
        this.setState({
            ...this.state,
            size:size
        })
    }
    checkUser(){
        //Si hay usuario y si el usuario es correcto o caducado y si no ir a login.
        // Hay que hacer un endpoin en el backen que compruebe el token y meterlo en servicio de usuario
        var product = this.state.product
        var size = this.state.size
        var color = this.state.color
       var auth ="" // llamada al backen para autenticar y entoces en vez de mirar porps.user mirar auth
        if(this.props.user===""){
            this.props.history.push("/login")
        }
        else{ 
            
            this.props.ChooseProduct(product.name,product.price,size,color,product.description)
            this.props.history.push("/compra")
        }
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
                                    src = {this.state.color}
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

                                <div>
                                    
                                    <form className="sizes">

                                        {product.sizes.map((size)=>(
                                            <label key={size.id} className="InputProduct">
                                            <input
                                            
                                            type="radio"
                                            value={size.value}
                                            checked={this.state.size === size.value}
                                            onChange={(ev)=>this.setSize(ev.target.value)}
                                            className="form-check-input"
                                            />
                                            {size.value}
                                        </label>
                                        ))}
                                    </form>  

                                </div>
                                
                                <div>
                                    <form className="colors">

                                    {product.colors.map((color)=>(
                                         <label key={color.id} className="InputProduct">
                                         <input
                                           type="radio"
                                           value={color.img_src}
                                           checked={this.state.color === color.img_src}
                                           onChange={(ev)=>this.setColor(ev.target.value)}
                                           className="form-check-input"
                                         />
                                         {color.name}
                                       </label>
                                    ))}
                                    </form>
                                </div>
                            
                                
                        </div>
    
    
                    </div>
                    
                    
                    
                    
                    
                    <div className="BottomSection">
                        <div className="ProductDescription">
                        <p>{product.description}</p>
                        </div>
                        <div>
                         <h4>Comprar Producto</h4>     
                        <button className="Button" onClick={()=>this.checkUser()}>Comprar</button>
                        </div>
                    </div>
    
                </div>
            );
        }


        else {
            return(
                <div className="ProductDetail Error">   
                     <Header  props = {this.props}/>
                    <h2>Cargando producto...</h2>

                </div>
            );
        }
    }

}
const mapStateToProps = state => ({
    user: state.user.token,
   
  })
  
  const mapDispatchToProps = dispatch => ({
    //Allproducts: (page) => dispatch(GetAllProducts(page)),
    ChooseProduct:(name,price,size,color,description) =>dispatch(chooseProduct(name,price,size,color,description))

  })


export default connect(mapStateToProps,mapDispatchToProps ) (ProductDetail);