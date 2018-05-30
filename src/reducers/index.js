import { combineReducers } from 'redux';
import ProductImages from './ProductImagesReducer';
import ProductCart from './ProductCartReducer';

const rootReducer = combineReducers({
  ProductImages,
  ProductCart
});

export default rootReducer;
