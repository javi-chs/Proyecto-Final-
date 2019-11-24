import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
//Importamos las vistas.
import Register from './views/Register';
import Login from './views/Login';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import NotFound from './views/NotFound';
import Purchase from "./views/Purchase"


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
    
        <Switch>
        
          <Route exact path="/catalogo" component ={Products}/>
          <Route exact path="/producto/:id" component ={ProductDetail}/>
          <Route exact path="/login" component ={Login}/>
          <Route exact path="/registrar" component ={Register}/>
          <Route exact path="/compra" component ={Purchase}/>
          <Redirect path='/' exact to='catalogo' />
          <Route exact path="*" component ={NotFound}/>
        
        </Switch>
        <Footer/>   
      </BrowserRouter>
     
   
    </div>
  );
}

export default App;
