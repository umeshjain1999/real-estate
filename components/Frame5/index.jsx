import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalBlack16px, ValignTextMiddle } from "../../styledMixins";


function Frame5(props) {
  const { favorite, className } = props;

  return (
    <Frame51 className={`frame-5 ${className || ""}`}>
      <Favorite className="favorite" src={favorite} />
      <Save className="save">Save</Save>
    </Frame51>
  );
}

const Frame51 = styled.div`
  margin-top: -2.2px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 76px;

  &.frame-5.frame-5-1 {
    margin-top: unset;
  }

  &.frame-5.frame-5-2 {
    margin-top: unset;
  }

  &.frame-5.frame-5-3 {
    margin-top: unset;
  }

  &.frame-5.frame-5-4 {
    margin-top: unset;
  }
`;

const Favorite = styled.img`
  width: 24px;
  height: 24px;
`;

const Save = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack16px}
            height: 20px;
  margin-left: 1px;
  margin-top: 1px;
  letter-spacing: 0.16px;
`;

export default Frame5;
