import { combineReducers } from 'redux';

import {cartReducer} from './cartReducer';
import {contactsReducer} from "./contactsReducer";

export default combineReducers({
    cartState: cartReducer,
    contactsState: contactsReducer
});