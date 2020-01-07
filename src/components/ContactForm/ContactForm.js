import React from 'react';
import {MIN_AMOUNT_FREE_SHIP, opts} from '../../constants/const';
import stl from './contactForm.module.css';
import {NavLink} from "react-router-dom";

const ContactForm = (props)=>{
    if(props.totalAmount > MIN_AMOUNT_FREE_SHIP){ opts[3].hidden = ''; }
    const showOptions = opts.map((item) => <option key={item.value} value={item.value} hidden={item.hidden}>{item.description}</option>);

    const nameValidation = () => {
        const inputData = props.currentName;
        props.validateName(inputData);
    };

    const addressValidation = () => {
        const inputData = props.currentAddress;
        props.validateAddress(inputData);
    };

    const emailValidation = () => {
        const inputData = props.currentEmail;
        props.validateEmail(inputData);
    };

    const phoneValidation = () => {
        const inputData = props.currentPhone;
        props.validatePhone(inputData);
    };

    return(
        <form className={stl.mainCtr}>
            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        Name *
                    </p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={props.nameValidated ? stl.inputContainer : stl.inputNotVldCntr}>
                        <input type="text" name="userName" value={props.currentName} onChange={props.changeName} onBlur={nameValidation}/>
                    </div>
                    <div className={stl.hiddenMsg}>
                        <p>{props.nameValidated ? '' : 'Fill in Your name!'}</p>
                    </div>
                </div>
            </div>

            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        Address*</p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={props.addressValidated ? stl.inputContainer : stl.inputNotVldCntr}>
                        <input type="text" name="userAddress" value={props.currentAddress} onChange={props.changeAddress} onBlur={addressValidation}/>
                    </div>
                    <div className={stl.hiddenMsg}>
                        <p>{props.addressValidated ? '' : 'Fill in Your address!'}</p>
                    </div>
                </div>
            </div>

            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        Phone</p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={props.phoneValidated ? stl.inputContainer : stl.inputNotVldCntr}>
                        <input type="text" name="userPhone" value={props.currentPhone} onChange={props.changePhone} onBlur={phoneValidation} placeholder="+48-333-111-2222"/>
                    </div>
                    <div className={stl.hiddenMsg}>
                        <p>{props.phoneValidated ? '' : 'Fill in Your Phone Correct!'}</p>
                    </div>
                </div>
            </div>

            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        E-mail</p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={props.emailValidated ? stl.inputContainer : stl.inputNotVldCntr}>
                        <input type="text" name="userEmail" value={props.currentEmail} onChange={props.changeEmail} onBlur={emailValidation}/>
                    </div>
                    <div className={stl.hiddenMsg}>
                        <p>{props.emailValidated ? '' : 'Invalid e-mail!'}</p>
                    </div>
                </div>
            </div>

            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        Shipping options</p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={stl.inputContainer}>
                        <select name="userShipping" value={props.currentShipping} onChange={props.changeShipping}>
                            {showOptions}
                        </select>
                    </div>
                </div>
            </div>

            <div className={stl.buttonCtr}>
                <NavLink to="/payment">
                    <button className={stl.buttonBuy} disabled={props.buttonValidated} onClick={props.getOrderDataThunk}>PAY</button>
                </NavLink>
            </div>
        </form>
    );
};
export default ContactForm;