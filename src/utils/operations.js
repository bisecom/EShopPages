export const validateEmail = (email)=> {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (inputNumber) => {
    const phoneNo = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNo.test(inputNumber);
};

export const totalAmountCalculate = (cart) => {
    if (!cart.length) return;
    const total = cart
        .map(product => product.price * product.quantity)
        .reduce((prev, next) => prev + next);
    return total;
};