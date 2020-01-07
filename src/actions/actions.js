import {validateEmail, validatePhoneNumber} from "../utils/operations";
//loading action
export const loadingProductsSuccess = products => {
    return {
        type: "LOAD_ALL_PRODUCTS_SUCCESS",
        isLoading: false,
        payload: products
    };
};

//cart actions
export const cartProductChangeCreator = event => {
  const productId = event.target.getAttribute("id");
  return {
    type: "CART_PRODUCT_DELETE",
    payload: productId
  };
};

export const cartQtyCountDownCreator = event => {
  const productId = event.target.getAttribute("id");
  return {
    type: "CART_QTY_DOWN",
    payload: productId
  };
};

export const cartQtyCountUpCreator = event => {
    const productId = event.target.getAttribute("id");
    return {
        type: "CART_QTY_UP",
        payload: productId
    };
};

//contact form actions
export const contactsNameChangeCreator = event => {
    const name = event.target.value;
  return {
    type: "NAME_CHANGE",
    payload: name
  };
};
export const contactsAddressChangeCreator = event => {
    const address = event.target.value;
  return {
    type: "ADDRESS_CHANGE",
    payload: address
  };
};
export const contactsPhoneChangeCreator = event => {
    const phone = event.target.value;
  return {
    type: "PHONE_CHANGE",
    payload: phone
  };
};

export const contactsEmailChangeCreator = event => {
    const email = event.target.value;
  return {
    type: "EMAIL_CHANGE",
    payload: email
  };
};

export const contactsShippingChangeCreator = event => {
    if (typeof event === 'string') {
        return {
            type: "SHIPPING_CHANGE",
            payload: event
        };
    }
    const shipping = event.target.value;
    return {
        type: "SHIPPING_CHANGE",
        payload: shipping
    };
};

//Validation
export const contactsNameValidCreator = (inputData) =>{
    if (inputData.length < 3) {
        return {
            type: "NAME_NOT_VALIDATED",
            payload: false
        };
    } else {
        return {
            type: "NAME_VALIDATED",
            payload: true
        };
    }
};

export const contactsAddressValidCreator = (inputData) =>{
    if (inputData.length < 8) {
        return {
            type: "ADDRESS_NOT_VALIDATED",
            payload: false
        };
    } else {
        return {
            type: "ADDRESS_VALIDATED",
            payload: true
        };
    }
};

export const contactsEmailValidCreator = (inputData) =>{
    const validationResult = validateEmail(inputData);
    if (!validationResult) {
        return {
            type: "EMAIL_NOT_VALIDATED",
            payload: false
        };
    } else {
        return {
            type: "EMAIL_VALIDATED",
            payload: true
        };
    }
};

export const contactsPhoneValidCreator = (inputData) =>{
    const validationResult = validatePhoneNumber(inputData);
    if (!validationResult) {
        return {
            type: "PHONE_NOT_VALIDATED",
            payload: false
        };
    } else {
        return {
            type: "PHONE_VALIDATED",
            payload: true
        };
    }
};
