import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalWhite16px, ValignTextMiddle } from "../../styledMixins";


function Button5(props) {
  const { children } = props;

  return (
    <Button>
      <Search>{children}</Search>
    </Button>
  );
}

const Button = styled.div`
  width: 111px;
  height: 40px;
  margin-top: 50px;
  margin-right: 1px;
  display: flex;
  background-color: var(--black);
  border-radius: 12px;
`;

const Search = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalWhite16px}
            margin-top: 10px;
  width: 71px;
  height: 20px;
  margin-left: 20px;
  letter-spacing: 0.16px;
`;

export default Button5;
