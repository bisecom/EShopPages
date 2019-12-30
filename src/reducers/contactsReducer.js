import {initialContactState} from "../constants/const";

export function contactsReducer(state = initialContactState, action) {
    switch (action.type) {
        case 'NAME_CHANGE': {
            return {...state, ...state.name = action.payload};//}
        }
        case 'ADDRESS_CHANGE': {
            return {...state, ...state.address = action.payload};
        }
        case 'PHONE_CHANGE': {
            return {...state, ...state.phone = action.payload};
        }
        case 'EMAIL_CHANGE': {
            return {...state, ...state.email = action.payload};
        }
        case 'SHIPPING_CHANGE': {
            return {...state, ...state.shipping = action.payload};
        }
        case 'NAME_NOT_VALIDATED': {
            return {...state, ...state.nameIsValidated = action.payload};
        }
        case 'NAME_VALIDATED': {
            let isEmailValid = state.email;
            let isAddressValid = state.address;
            if(isEmailValid && isAddressValid)
                return {...state, ...state.nameIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.nameIsValidated = action.payload};
        }
        case 'ADDRESS_NOT_VALIDATED': {
            return {...state, ...state.addressIsValidated = action.payload};
        }
        case 'ADDRESS_VALIDATED': {
            let isNameValid = state.name;
            let isEmailValid = state.email;
            if(isNameValid && isEmailValid)
                return {...state, ...state.addressIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.addressIsValidated = action.payload};
        }
        case 'EMAIL_NOT_VALIDATED': {
            return {...state, ...state.emailIsValidated = action.payload};
        }
        case 'EMAIL_VALIDATED': {
            let isNameValid = state.name;
            let isAddressValid = state.address;
            if(isNameValid && isAddressValid)
                return {...state, ...state.emailIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.emailIsValidated = action.payload};
        }

        default:
            return state;
    }
}
