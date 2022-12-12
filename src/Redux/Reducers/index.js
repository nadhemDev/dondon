import { combineReducers } from 'redux';
import  Auth  from './Auth';
import Products from './Products';
import Users from './Users';
import Categories from './Categories';
import Carosels from './Carosels';
import Patients from './Patients';
import Cancers from './Cancers';


export default combineReducers({
     Auth,Users,Products,Categories,Carosels,Patients,Cancers


});
