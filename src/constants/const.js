export const TRASH_IM_PATH = 'https://images2.imgbox.com/2e/18/McqVQ7NW_o.png';

export const API_PATH = 'http://5e039a24a7ad3700141a1dc7.mockapi.io/api/products';
//export const API_PATH = 'http://localhost:62517/api/products';
export const MIN_AMOUNT_FREE_SHIP = 300;
export const opts = [
    {value: 'free', description: 'Free shipping', hidden: ''},
    {value: 'express', description: 'Express shipping- additional 9.99 €', hidden: ''},
    {value: 'courier', description: 'Courier shipping - additional 19.99 €', hidden: ''},
    {value: 'freeExpress', description: 'Free express shipping', hidden: 'hidden'}
];

export const initialContactState = {
    id: 0,
    name: '',
    nameIsValidated: true,
    address: '',
    addressIsValidated: true,
    phone: '',
    phoneIsValidated: true,
    email: '',
    emailIsValidated: true,
    shipping: 'free',
    isButtonDisabled: true
};

export const initialState = {
    cart: [/*product, product1, product2*/],
    clientDetails: [],
    orders: []
};
//initial state data
/*
let product = {
  id: 0,
  title: "Lorem ipsum dolor sit amet",
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  imagePath: IMAGE_PLACEHOLDER_PATH,
  price: 53,
  quantity: 0,
  currency: "Euro",
  isLoading: true,
  errorMessage: null
};
let product1 = {
  id: 1,
  title: "Lorem ipsum dolor sit amet",
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  imagePath: IMAGE_PLACEHOLDER_PATH,
  price: 23,
  quantity: 0,
  currency: "Euro",
  isLoading: true,
  errorMessage: null
};
let product2 = {
  id: 2,
  title: "Lorem ipsum dolor sit amet",
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  imagePath: IMAGE_PLACEHOLDER_PATH,
  price: 83,
  quantity: 0,
  currency: "Euro",
  isLoading: true,
  errorMessage: null
};

*/