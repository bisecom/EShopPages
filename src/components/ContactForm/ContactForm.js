import React from 'react';
import {opts} from '../../constants/const';
import stl from './contactForm.module.css';

let ContactForm = (props)=>{

    let getTotalAmount = parseInt(sessionStorage.getItem("sessionStoredAmount"));

    if(getTotalAmount > 300){ opts[3].hidden = ''; }
    let showOptions = opts.map((item) => <option key={item.value} value={item.value} hidden={item.hidden}>{item.description}</option>);

    function nameValidation(){
        let inputData = props.currentName;
        props.validateName(inputData);
    }

    function addressValidation(){
        let inputData = props.currentAddress;
        props.validateAddress(inputData);
    }

    function emailValidation(){
        let inputData = props.currentEmail;
        props.validateEmail(inputData);
    }

    let handlerButtonClick =()=>{
        sessionStorage.clear();
        //fulfill logic to update state and initialize data sending to server..
    }


    return(
        <form className={stl.mainCtr}>
            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        Name *
                    </p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={stl.inputContainer}>
                        <input type="text" name="userName" value={props.currentName} onChange={props.changeName} onBlur={nameValidation}/>
                    </div>
                    <div className={stl.hiddenMsg}>
                        <p>{props.nameValidated ? '' : 'Fill in Your name'}</p>
                    </div>
                </div>
            </div>

            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        Address*</p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={stl.inputContainer}>
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
                    <div className={stl.inputContainer}>
                        <input type="text" name="userPhone" value={props.currentPhone} onChange={props.changePhone}/>
                    </div>
                    <div className={stl.hiddenMsg}></div>
                </div>
            </div>

            <div className={stl.oneRow}>
                <div className={stl.leftField}>
                    <p className={stl.LeftFielData}>
                        E-mail</p>
                </div>
                <div className={stl.rightFieldContainer}>
                    <div className={stl.inputContainer}>
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
                        <select name="userShipping" value={getTotalAmount > 300 ? 'freeExpress' : 'free'} onChange={props.changeShipping}>
                            {showOptions}
                        </select>
                    </div>
                </div>
            </div>

            <div className={stl.buttonCtr}>
                <button className={stl.buttonBuy} disabled={props.buttonValidated} onClick={handlerButtonClick}>PAY</button>
            </div>
        </form>
    );
};
export default ContactForm;