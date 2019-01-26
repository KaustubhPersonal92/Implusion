import { combineReducers } from 'redux';
import ProductImages from './ProductImagesReducer';
import ProductCart from './ProductCartReducer';
import UserProfile from './UserProfileReducer';

const rootReducer = combineReducers({
  ProductImages,
  ProductCart,
  UserProfile
});

export default rootReducer;
