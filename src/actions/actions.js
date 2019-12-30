import {validateEmail} from "../utils/operations";
//loading action
export function loadingProductsSuccess(products) {
    return {
        type: "LOAD_ALL_PRODUCTS_SUCCESS",
        isLoading: false,
        payload: products
    };
}

//cart actions
export const cartProductChangeCreator = event => {
  let productId = event.target.getAttribute("id");
  return {
    type: "CART_PRODUCT_DELETE",
    payload: productId
  };
};

export const cartQtyChangeCreator = event => {
  let productId = event.target.getAttribute("id");
  let buttonName = event.target.getAttribute("name");
  return {
    type: "CART_QTY_CHANGE",
    payload: { productId, buttonName }
  };
};

//contact form actions
export const contactsNameChangeCreator = event => {
  let name = event.target.value;
  return {
    type: "NAME_CHANGE",
    payload: name
  };
};
export const contactsAddressChangeCreator = event => {
  let address = event.target.value;
  return {
    type: "ADDRESS_CHANGE",
    payload: address
  };
};
export const contactsPhoneChangeCreator = event => {
  let phone = event.target.value;
  return {
    type: "PHONE_CHANGE",
    payload: phone
  };
};

export const contactsEmailChangeCreator = event => {
  let email = event.target.value;
  return {
    type: "EMAIL_CHANGE",
    payload: email
  };
};

export const contactsShippingChangeCreator = event => {
  let shipping = event.target.value;
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
    let validationResult = validateEmail(inputData);
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
