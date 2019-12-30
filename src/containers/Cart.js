import React, { Component } from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";

import {cartProductChangeCreator,  cartQtyChangeCreator} from "../actions/actions";
import ProductLine from "../components/Product/ProductLine";
import { getCartProductsThunk } from "../api/index";
import stl from "./containers.module.css";
import {SceletonProductLine} from "../components/SceletonProduct/ProductLine";

class Cart extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  handleBuyOnClick = ()=>{
    if(this.props.cart){
      sessionStorage.setItem("sessionStoredAmount", this.totalAmountCalculate(this.props.cart));
    }
  }

  totalAmountCalculate(cart){
    if(!cart.length) return;
    let grandTotal = cart
        .map(product => product.price * product.quantity)
        .reduce((prev, next) => prev + next);
    return grandTotal;
  }
  render() {
    let currentCart = this.props.cart;

    let showProducts = currentCart.map(product => (
      <tr key={product.id}>
        <td>
          <ProductLine
            id={product.id}
            mainImage={product.imagePath}
            titleData={product.title}
            descriptionData={product.description}
            quantity={product.quantity}
            price={product.price}
            deleteProduct={this.props.deleteProduct}
            changeQuantity={this.props.changeQuantity}
            amount={product.quantity * product.price}
          />
        </td>
      </tr>
    ));
    let grandTotal;
    if(currentCart.length){
      grandTotal = this.totalAmountCalculate(currentCart);
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
                      <button className={stl.buttonBuy} id="buyButton" onClick={this.handleBuyOnClick}>
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

const mapDispatchToProps = dispatch => ({
  deleteProduct: event => dispatch(cartProductChangeCreator(event)),
  changeQuantity: event => dispatch(cartQtyChangeCreator(event)),
  loadProducts: () => dispatch(getCartProductsThunk())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
