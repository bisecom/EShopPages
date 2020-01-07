import React from 'react';
import stl from './firstPage.module.css';
import {NavLink} from "react-router-dom";

const FirstPage = () => {
    return(
        <div className={stl.nameCtr}>
            <div>
                <NavLink to="/cart" className={stl.linkStyle}>Cart</NavLink>
            </div>
            <div>
                <NavLink to="/shipping" className={stl.linkStyle}>Shipping</NavLink>
            </div>
        </div>
    );
};
export default FirstPage;