import axios from 'axios';

import { API_PATH } from '../constants/const';
import {loadingProductsSuccess} from "../actions/actions";

export const getCartProductsThunk = () => dispatch => {
    axios
        .get(API_PATH)
        .then(response => {
            dispatch(loadingProductsSuccess(response.data));
        })
        .catch(function(error) {
            console.log(error);
        });
};