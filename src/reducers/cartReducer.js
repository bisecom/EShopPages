const initialState = {
  cart: [/*product, product1, product2*/],
  clientDetails: [],
  orders: []
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS_SUCCESS": {
      return {
        ...state,
        cart: [...action.payload]
      };
    }

    case "CART_PRODUCT_DELETE": {
      let currentProducts = JSON.parse(JSON.stringify(state.cart));
      let productId = Number.parseInt(action.payload);
      currentProducts = currentProducts.filter(function (product) {
        return Number.parseInt(product.id) !== productId;
      });
      return {
        cart: currentProducts,
        clientDetails: [],
        orders: []
      };
    }
    case "CART_QTY_CHANGE": {
      let currentProducts = JSON.parse(JSON.stringify(state.cart));
      let productId = Number.parseInt(action.payload.productId);
      let buttonName = action.payload.buttonName;
      let productIndex = currentProducts
          .map(function (e) {
            return Number.parseInt(e.id);
          })
          .indexOf(productId);
      let currentQty = currentProducts[productIndex].quantity;
      if (
          (currentQty < 1 && buttonName === "decreaseQty") ||
          (currentQty > 49 && buttonName === "increaseQty")
      ) {
        return state;
      }
      if (currentQty < 50 && buttonName === "increaseQty") {
        currentQty++;
      }
      if (currentQty > 0 && buttonName === "decreaseQty") {
        currentQty--;
      }

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
}

