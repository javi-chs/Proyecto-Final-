import React, {Component} from "react"
import {connect} from "react-redux"
import Header from "../components/Header"
import "./style/Purchase.scss"
import { Card } from 'antd';

const { Meta } = Card;
class Purchase extends Component{

    constructor(props){
        super(props)
        this.componentDidMount = ()=>{
            console.log("Props en el mount")
            console.log(this.props)
        }
        this.componentDidMount = ()=>{
            console.log("Props en el update")
            console.log(this.props)
        }
    }
    goToLogin(){
        this.props.history.push("/login")
    }
    render(){
        
        if(this.props.token==""){
            //NO HAY USER
            return(
                <div>
                    <Header props = {this.props}/>
                    <div className="PurchaseErrorPage">
                        <div className="message">
                      
                            <h1>{"Aceso restringido solo a usuarios"}</h1>
                      
                        </div>
                        
                        <div className="ButtonToLogin">

                            <button onClick={()=>this.goToLogin()}> Login</button>
                        
                        </div>

                    </div>

                </div>
            );
        }
        else if(this.props.name == ""){

           return(
            <div>
            <Header props = {this.props}/>
            <div className="PurchaseErrorPage">
                <div className="message">
              
                    <h1>{"Hola, " +this.props.username+" todavía no has comprado ningún producto"}</h1>
              
                </div>
                
            </div>

        </div>
           ); 
        }
        
        else{
            //HAY USER Y PRODUCTO
            return(
               <div>
                   <Header props={this.props}/>
                    <div className="PurchasePage">
                        
                        <div className="PurchaseTittle">
                            <h1>{"Felicidades, " + this.props.username}</h1>
                            <h4>{"La compra de tu producto, " + this.props.name + ", se ha realizado con éxito"}</h4>
                        </div>
                        <div className="PurchaseProduct">
                            <img
                                className="product_img"
                                src = {this.props.color}
                                alt= {this.props.name}
                                    />
                                   
                        </div>
                        <div className="ProductDefinition">
                                
                                <div className="InfoGeneral">
                                    <h3>Producto: {this.props.name}</h3>
                                    <h3>Precio: {this.props.price} €</h3>
                                    <h3>Talla: {this.props.size}</h3>
                                </div>

                                <div className="Descriptcion">
                                    <h4>{this.props.description}</h4>
                                </div>
                        </div>
                    </div>

               </div>
            );
        }
    }
}
const mapStateToProps = state => ({
    token: state.user.token,
    username: state.user.name,
    httpStatus:state.user.httpStatus,
    name:state.ChosenProduct.name,
    price:state.ChosenProduct.price,
    size:state.ChosenProduct.size,
    color:state.ChosenProduct.color,
    description:state.ChosenProduct.description
  })
  
const mapDispatchToProps = dispatch => ({
    
   

  })
export default connect (mapStateToProps, mapDispatchToProps)(Purchase)