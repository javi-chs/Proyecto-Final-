import { combineReducers } from 'redux';

//Dependencias de Reducers
import user from './user'
import products from './products'
// Exportamos CombineReducers donde alojaremos todos los reducers
export default combineReducers({
    user,
    products
});