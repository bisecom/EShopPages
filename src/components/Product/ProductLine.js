import React from "react";

import stl from "./productLine.module.css";
import { TRASH_IM_PATH } from "../../constants/const";

const ProductLine = props => {

  return (
    <div className={stl.mainCtr}>
      <div className={stl.pctrCtr}>
        <div className={stl.imgCntr}>
          <img src={props.mainImage } alt={"Product Img"} />
        </div>
      </div>
      <div className={stl.descrCtr}>
        <p>{props.titleData}</p>
        <div className={stl.descrTxtCtr}>{props.descriptionData}</div>
      </div>
      <div className={stl.btnsCtr}>
        <div className={stl.imgCtr}>
          <img
            src={TRASH_IM_PATH}
            alt={"Trash Icon"}
            onClick={props.deleteProduct}
            id={props.id}
          />
        </div>
        <div className={stl.btnsLine}>
          <button
            className={stl.myButton}
            id={props.id}
            onClick={props.onCountDown}
          >-</button>
          <span className={stl.qtySpan}>{props.quantity}</span>
          <button
            className={stl.myButton}
            id={props.id}
            onClick={props.onCountUp}
          >+</button>
          <span className={stl.amountSpan}>{(Math.round(props.amount * 100) / 100).toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default ProductLine;
