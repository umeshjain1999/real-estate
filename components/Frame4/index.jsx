import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalBlack16px, ValignTextMiddle } from "../../styledMixins";


function Frame4(props) {
  const { center_Focus_Strong, className } = props;

  return (
    <Frame41 className={`frame-4 ${className || ""}`}>
      <CenterFocusStrong className="center_focus_strong" src={center_Focus_Strong} />
      <Address className="address-1">1000 Sqft</Address>
    </Frame41>
  );
}

const Frame41 = styled.div`
  margin-top: -2.2px;
  width: 102px;
  margin-left: 10px;
  display: flex;

  &.frame-4.frame-4-1 {
    margin-top: unset;
  }

  &.frame-4.frame-4-2 {
    margin-top: unset;
  }

  &.frame-4.frame-4-3 {
    margin-top: unset;
  }

  &.frame-4.frame-4-4 {
    margin-top: unset;
  }
`;

const CenterFocusStrong = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 5px;
`;

const Address = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack16px}
            margin-top: 2px;
  width: 71px;
  height: 20px;
  margin-left: 2px;
  letter-spacing: 0.16px;
`;

export default Frame4;
