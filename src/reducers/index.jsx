import { combineReducers } from 'redux';

//Dependencias de Reducers
import user from './user'
import products from './products'
import pages from "./pages"
import searchType from "./searchType"
import ChosenProduct from "./ChosenProduct"
// Exportamos CombineReducers donde alojaremos todos los reducers
export default combineReducers({
    user,
    products,
    pages,
    searchType,
    ChosenProduct
});