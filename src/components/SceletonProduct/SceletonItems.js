import React from "react";
import ContentLoader from "react-content-loader";

export const SceletonRect = () => {
  return (
      <ContentLoader height={110} width={110}>
          <rect x="5" y="10" rx="8" ry="8" width="90%" height="90%"/>
      </ContentLoader>
  );
};

export const SceletonDescr = () => {
    return (
        <ContentLoader height={110} width={350}>
            <rect x="10" y="5" rx="3" ry="3" width="100%" height="20"/>
            <rect x="25" y="35" rx="3" ry="3" width="100%" height="15"/>
            <rect x="25" y="60" rx="3" ry="3" width="90%" height="15"/>
            <rect x="25" y="85" rx="3" ry="3" width="70%" height="15"/>
        </ContentLoader>
    );
};

export const SceletonButtons = () => {
    return (
        <ContentLoader height={110} width={280}>
            <rect x="230" y="0" rx="3" ry="3" width="40" height="30"/>
            <rect x="5" y="50" rx="3" ry="3" width="100%" height="30"/>
        </ContentLoader>
    );
};
