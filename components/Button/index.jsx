import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalWhite16px, ValignTextMiddle } from "../../styledMixins";


function Button(props) {
  const { icons, search } = props;

  return (
    <Button1>
      <IconCall src={icons} />
      <Search>{search}</Search>
    </Button1>
  );
}

const Button1 = styled.div`
  margin-top: 10px;
  width: 144px;
  height: 40px;
  margin-left: 10px;
  display: flex;
  background-color: var(--black);
  border-radius: 12px;
`;

const IconCall = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

const Search = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalWhite16px}
            margin-top: 10px;
  width: 82px;
  height: 20px;
  margin-left: 2px;
  letter-spacing: 0.16px;
`;

export default Button;
