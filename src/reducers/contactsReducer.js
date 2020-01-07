import {initialContactState} from "../constants/const";

export const contactsReducer = (state = initialContactState, action) => {
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
            return {...state, ...state.nameIsValidated = action.payload, ...state.isButtonDisabled = true};
        }
        case 'NAME_VALIDATED': {
            if(state.email && state.emailIsValidated && state.address && state.addressIsValidated
                && state.phone && state.phoneIsValidated && action.payload)
                return {...state, ...state.nameIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.nameIsValidated = action.payload};
        }
        case 'ADDRESS_NOT_VALIDATED': {
            return {...state, ...state.addressIsValidated = action.payload, ...state.isButtonDisabled = true};
        }
        case 'ADDRESS_VALIDATED': {
            if(state.email && state.emailIsValidated && state.name && state.nameIsValidated
                && state.phone && state.phoneIsValidated && action.payload)
                return {...state, ...state.addressIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.addressIsValidated = action.payload};
        }
        case 'EMAIL_NOT_VALIDATED': {
            return {...state, ...state.emailIsValidated = action.payload, ...state.isButtonDisabled = true};
        }
        case 'EMAIL_VALIDATED': {
            if(state.address && state.addressIsValidated && state.name && state.nameIsValidated
                && state.phone && state.phoneIsValidated && action.payload)
                return {...state, ...state.emailIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.emailIsValidated = action.payload};
        }

        case 'PHONE_NOT_VALIDATED': {
            return {...state, ...state.phoneIsValidated = action.payload, ...state.isButtonDisabled = true};
        }
        case 'PHONE_VALIDATED': {
            if(state.address && state.addressIsValidated && state.name && state.nameIsValidated
                && state.email && state.emailIsValidated && action.payload)
                return {...state, ...state.phoneIsValidated = action.payload, ...state.isButtonDisabled = false};
            return {...state, ...state.phoneIsValidated = action.payload};
        }

        default:
            return state;
    }
};
