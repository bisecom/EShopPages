import React from "react";
import {Skeleton} from 'react-loading-skeleton-placeholders';
import stl from "../Product/productLine.module.css";

export const SceletonProductLine = () => {
  return (
      <div className={stl.mainCtr}>
          <div >
                  <Skeleton skull={true}/>
          </div>
          <div className={stl.descrCtr}>
              <Skeleton bigBone={true}/>
              <div className={stl.descrTxtCtr}><Skeleton amount={3}/></div>
          </div>
          <div className={stl.btnsCtr}>
              <div className={stl.imgCtr}>
                  <Skeleton />
              </div>
              <div className={stl.btnsLine}>
                  <Skeleton bigBone={true}/>
              </div>
          </div>
      </div>
  );
};

