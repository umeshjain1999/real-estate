import React from "react";
import styled from "styled-components";
import { CircularstdMediumElectricViolet24px, ValignTextBottom } from "../../styledMixins";


function Frame21() {
  return (
    <Frame211>
      <Text1>₹ 20000</Text1>
    </Frame211>
  );
}

const Frame211 = styled.div`
  width: 122px;
  margin-left: 2px;
  display: flex;
`;

const Text1 = styled.div`
  ${ValignTextBottom}
  ${CircularstdMediumElectricViolet24px}
            width: 92px;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

export default Frame21;
