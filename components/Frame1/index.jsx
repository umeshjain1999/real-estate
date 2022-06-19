import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalBlack16px, ValignTextMiddle } from "../../styledMixins";


function Frame1(props) {
  const { bed, number, className } = props;

  return (
    <Frame11 className={`frame-1-1 ${className || ""}`}>
      <Bed className="bed" src={bed} />
      <Number className="number">{number}</Number>
    </Frame11>
  );
}

const Frame11 = styled.div`
  margin-top: -2.2px;
  width: 34px;
  margin-left: 15px;
  display: flex;

  &.frame-1-1.frame-2 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-3 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-2-1 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-3-1 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-2-2 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-3-2 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-3-3 {
    margin-left: 10px;
  }

  &.frame-1-1.frame-1-3 {
    margin-top: unset;
  }

  &.frame-1-1.frame-2-3 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-3-4 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-1-4 {
    margin-top: unset;
  }

  &.frame-1-1.frame-2-4 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-3-5 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-1-5 {
    margin-top: unset;
  }

  &.frame-1-1.frame-2-5 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-3-6 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-1-6 {
    margin-top: unset;
  }

  &.frame-1-1.frame-2-6 {
    margin-left: 10px;
    margin-top: unset;
  }

  &.frame-1-1.frame-3-7 {
    margin-left: 10px;
    margin-top: unset;
  }
`;

const Bed = styled.img`
  width: 24px;
  height: 24px;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack16px}
            margin-top: 2px;
  width: 9px;
  height: 20px;
  margin-left: 1px;
  letter-spacing: 0.16px;
`;

export default Frame1;
