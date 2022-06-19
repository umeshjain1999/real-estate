import React from "react";
import Frame21 from "../Frame21";
import Address from "../Address";
import styled from "styled-components";
import { CircularstdBookNormalPinkSwan16px, CircularstdMediumBlack24px, ValignTextBottom } from "../../styledMixins";


function Divider(props) {
  const { surname, addressProps } = props;

  return (
    <Divider1>
      <NameTitle>
        <Frame19>
          <Frame20>
            <Surname>{surname}</Surname>
          </Frame20>
          <Frame21 />
        </Frame19>
        <ByKamdhenuBuilders>By Kamdhenu Builders</ByKamdhenuBuilders>
      </NameTitle>
      <Address pin_Drop={addressProps.pin_Drop} />
    </Divider1>
  );
}

const Divider1 = styled.div`
  width: 350px;
  height: 104px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const NameTitle = styled.div`
  margin-left: 10px;
  width: 340px;
  height: 54px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Frame19 = styled.div`
  width: 340px;
  position: relative;
  display: flex;
`;

const Frame20 = styled.div`
  width: 216px;
  display: flex;
`;

const Surname = styled.div`
  ${ValignTextBottom}
  ${CircularstdMediumBlack24px}
            width: 141px;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const ByKamdhenuBuilders = styled.div`
  ${ValignTextBottom}
  ${CircularstdBookNormalPinkSwan16px}
            height: 20px;
  margin-top: 2px;
  letter-spacing: 0.16px;
`;

export default Divider;
