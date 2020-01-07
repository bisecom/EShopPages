import {initialState} from "../constants/const";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS_SUCCESS": {
      return {
        ...state,
        cart: [...action.payload]
      };
    }

    case "CART_PRODUCT_DELETE": {
      let currentProducts = JSON.parse(JSON.stringify(state.cart));
      const productId = Number.parseInt(action.payload);
      currentProducts = currentProducts.filter(function (product) {
        return Number.parseInt(product.id) !== productId;
      });
      return {
        cart: currentProducts,
        clientDetails: [],
        orders: []
      };
    }

    case "CART_QTY_DOWN": {
      const currentProducts = JSON.parse(JSON.stringify(state.cart));
      const productId = Number.parseInt(action.payload);
      const productIndex = currentProducts
          .map(function (e) {
            return Number.parseInt(e.id);
          })
          .indexOf(productId);
      let currentQty = currentProducts[productIndex].quantity;
      //set min quantity per product as 1 pcs
      if (currentQty < 2) {
        return state;
      }
      currentQty--;
      currentProducts[productIndex].quantity = currentQty;
      return {
        cart: currentProducts,
        clientDetails: [],
        orders: []
      };
    }

    case "CART_QTY_UP": {
      const currentProducts = JSON.parse(JSON.stringify(state.cart));
      const productId = Number.parseInt(action.payload);
      const productIndex = currentProducts
          .map(function (e) {
            return Number.parseInt(e.id);
          })
          .indexOf(productId);
      let currentQty = currentProducts[productIndex].quantity;
      if ( currentQty > 49 ) {
        return state;
      }
      currentQty++;
      currentProducts[productIndex].quantity = currentQty;
      return {
        cart: currentProducts,
        clientDetails: [],
        orders: []
      };
    }

    default:
      return state;
  }
};
