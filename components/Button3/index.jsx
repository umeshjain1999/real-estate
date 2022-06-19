import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalWhite16px, ValignTextMiddle } from "../../styledMixins";


function Button3(props) {
  const { icons, search } = props;

  return (
    <Button>
      <IconSearch src={icons} />
      <Search>{search}</Search>
    </Button>
  );
}

const Button = styled.div`
  width: 113px;
  height: 40px;
  margin-left: 40px;
  display: flex;
  background-color: var(--electric-violet);
  border-radius: 12px;
`;

const IconSearch = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

const Search = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalWhite16px}
            margin-top: 10px;
  width: 51px;
  height: 20px;
  margin-left: 2px;
  letter-spacing: 0.16px;
`;

export default Button3;
