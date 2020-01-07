import React from "react";
import stl from "./sceletonProductLine.module.css";
import {SceletonButtons, SceletonDescr, SceletonRect} from "./SceletonItems";

export const SceletonProductLine = () => {
  return (
      <div className={stl.mainCont}>
          <div className={stl.pictCont}>
              <SceletonRect/>
          </div>
          <div className={stl.descCont}>
              <SceletonDescr/>
          </div>
          <div className={stl.buttonsCont}>
              <div>
                  <SceletonButtons/>
              </div>
          </div>
      </div>
  );
};

