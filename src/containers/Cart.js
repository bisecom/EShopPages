import React, { Component } from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";

import { cartProductChangeCreator, cartQtyCountDownCreator, cartQtyCountUpCreator} from "../actions/actions";
import ProductLine from "../components/Product/ProductLine";
import { getCartProductsThunk } from "../api/index";
import stl from "./containers.module.css";
import {SceletonProductLine} from "../components/SceletonProduct/ProductLine";
import {totalAmountCalculate} from "../utils/operations";

class Cart extends Component {
  componentDidMount() {
    if(!this.props.cart.length)
      this.props.getCartProductsThunk();
  }

  render() {
    const currentCart = this.props.cart;
    const showProducts = currentCart.map(product => (
      <tr key={product.id}>
        <td>
          <ProductLine
            id={product.id}
            mainImage={product.imagePath}
            titleData={product.title}
            descriptionData={product.description}
            quantity={product.quantity}
            price={product.price}
            deleteProduct={this.props.cartProductChangeCreator}
            onCountDown={this.props.cartQtyCountDownCreator}
            onCountUp={this.props.cartQtyCountUpCreator}
            amount={product.quantity * product.price}
          />
        </td>
      </tr>
    ));
    let grandTotal;
    if(currentCart.length){
      grandTotal = totalAmountCalculate(currentCart);
    }

    return (
        <div>
          {currentCart.length ?
              <table>
                <tbody>
                {showProducts}
                <tr>
                  <td className={stl.grandTotal}>{(Math.round(grandTotal * 100) / 100).toFixed(2)} €</td>
                </tr>
                <tr>
                  <td className={stl.buttonTd}>
                    <NavLink to="/shipping">
                      <button className={stl.buttonBuy} id="buyButton" >
                        BUY
                      </button>
                    </NavLink>
                  </td>
                </tr>
                </tbody>
              </table>
              : <div>
                <SceletonProductLine/>
                <SceletonProductLine/>
                <SceletonProductLine/>
                <SceletonProductLine/>
                <SceletonProductLine/>
              </div>
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart
});

export default connect(
  mapStateToProps,
 {cartProductChangeCreator, cartQtyCountDownCreator, cartQtyCountUpCreator, getCartProductsThunk})(Cart);
