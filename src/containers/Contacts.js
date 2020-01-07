import React, { Component } from 'react';
import { connect } from 'react-redux';

import { contactsAddressChangeCreator, contactsAddressValidCreator, contactsEmailChangeCreator,
    contactsEmailValidCreator, contactsNameChangeCreator, contactsNameValidCreator,
    contactsPhoneChangeCreator, contactsPhoneValidCreator, contactsShippingChangeCreator
} from "../actions/actions";
import {store} from '.././index';
import ContactForm from "../components/ContactForm/ContactForm";
import {totalAmountCalculate} from "../utils/operations";
import {MIN_AMOUNT_FREE_SHIP} from "../constants/const";
import {getOrderDataThunk} from "../api";

class Contacts extends Component {
    render() {
        const currentCart = store.getState().cartState.cart; let grandTotal = 0;
        if(currentCart.length){
            grandTotal = totalAmountCalculate(currentCart);
            if(grandTotal > MIN_AMOUNT_FREE_SHIP)
                this.props.contactsShippingChangeCreator('freeExpress');
        }
        return (
            <div>
                <ContactForm currentName={this.props.currentName} currentAddress={this.props.currentAddress}
                             currentPhone={this.props.currentPhone}
                             currentEmail={this.props.currentEmail} currentShipping={this.props.currentShipping}
                             changeName={this.props.contactsNameChangeCreator}
                             changeAddress={this.props.contactsAddressChangeCreator} changePhone={this.props.contactsPhoneChangeCreator}
                             changeEmail={this.props.contactsEmailChangeCreator}
                             changeShipping={this.props.contactsShippingChangeCreator} nameValidated={this.props.nameValidated}
                             addressValidated={this.props.addressValidated}
                             emailValidated={this.props.emailValidated} validateName={this.props.contactsNameValidCreator}
                             validateAddress={this.props.contactsAddressValidCreator}
                             validateEmail={this.props.contactsEmailValidCreator} phoneValidated={this.props.phoneValidated}
                             buttonValidated={this.props.buttonValidated} totalAmount={grandTotal}
                             validatePhone={this.props.contactsPhoneValidCreator} getOrderDataThunk={this.props.getOrderDataThunk}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentName: state.contactsState.name,
    currentAddress: state.contactsState.address,
    currentPhone: state.contactsState.phone,
    currentEmail: state.contactsState.email,
    currentShipping: state.contactsState.shipping,
    nameValidated: state.contactsState.nameIsValidated,
    addressValidated: state.contactsState.addressIsValidated,
    emailValidated: state.contactsState.emailIsValidated,
    phoneValidated: state.contactsState.phoneIsValidated,
    buttonValidated: state.contactsState.isButtonDisabled
});

export const ContactsContainer = connect(mapStateToProps,
    {
        contactsNameChangeCreator, contactsAddressChangeCreator, contactsPhoneChangeCreator,
        contactsEmailChangeCreator, contactsShippingChangeCreator, contactsNameValidCreator,
        contactsAddressValidCreator, contactsEmailValidCreator, contactsPhoneValidCreator,
        getOrderDataThunk
    })(Contacts);


