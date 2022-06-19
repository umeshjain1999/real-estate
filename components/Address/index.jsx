import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalPinkSwan13px, ValignTextBottom } from "../../styledMixins";


function Address(props) {
  const { pin_Drop } = props;

  return (
    <Address1>
      <PinDrop src={pin_Drop} />
      <Sector3KhargharNaviMumbai410210>Sector 3, Kharghar, Navi Mumbai 410210</Sector3KhargharNaviMumbai410210>
    </Address1>
  );
}

const Address1 = styled.div`
  margin-left: 10px;
  width: 340px;
  margin-top: 10px;
  display: flex;
`;

const PinDrop = styled.img`
  width: 20px;
  height: 20px;
`;

const Sector3KhargharNaviMumbai410210 = styled.p`
  ${ValignTextBottom}
  ${CircularstdBookNormalPinkSwan13px}
            margin-top: 2px;
  width: 318px;
  height: 16px;
  margin-left: 2px;
  letter-spacing: 0;
`;

export default Address;
