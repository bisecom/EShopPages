import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    contactsAddressChangeCreator, contactsAddressValidCreator,
    contactsEmailChangeCreator, contactsEmailValidCreator,
    contactsNameChangeCreator, contactsNameValidCreator,
    contactsPhoneChangeCreator, contactsShippingChangeCreator
} from "../actions/actions";

import ContactForm from "../components/ContactForm/ContactForm";

class Contacts extends Component {
    render() {
        console.log("this.props.buttonValidated " + this.props.buttonValidated);
return (
    <div>
    <ContactForm  currentName={this.props.currentName} currentAddress={this.props.currentAddress} currentPhone={this.props.currentPhone}
                  currentEmail={this.props.currentEmail} currentShipping={this.props.currentShipping} changeName={this.props.changeName}
                  changeAddress={this.props.changeAddress} changePhone={this.props.changePhone} changeEmail={this.props.changeEmail}
                  changeShipping={this.props.changeShipping} nameValidated={this.props.nameValidated} addressValidated={this.props.addressValidated}
                  emailValidated={this.props.emailValidated} validateName={this.props.validateName} validateAddress={this.props.validateAddress}
                  validateEmail={this.props.validateEmail} buttonValidated={this.props.buttonValidated} postOrder={this.props.postOrder}/>
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
    buttonValidated: state.contactsState.isButtonDisabled
});

const mapDispatchToProps = dispatch => ({
    changeName: (event) => dispatch(contactsNameChangeCreator(event)),
    changeAddress: (event) => dispatch(contactsAddressChangeCreator(event)),
    changePhone: (event) => dispatch(contactsPhoneChangeCreator(event)),
    changeEmail: (event) => dispatch(contactsEmailChangeCreator(event)),
    changeShipping: (event) => dispatch(contactsShippingChangeCreator(event)),
    validateName: (str) => dispatch(contactsNameValidCreator(str)),
    validateAddress: (str) => dispatch(contactsAddressValidCreator(str)),
    validateEmail: (str) => dispatch(contactsEmailValidCreator(str))
});
export const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);


