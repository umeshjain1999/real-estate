import React from "react";
import styled from "styled-components";


function Frame6() {
  return (
    <Frame61>
      <Rectangle1></Rectangle1>
    </Frame61>
  );
}

const Frame61 = styled.div`
  width: 350px;
  height: 6px;
  display: flex;
  background-color: var(--white);
`;

const Rectangle1 = styled.div`
  margin-top: 2.8px;
  width: 350px;
  height: 1px;
  background-color: var(--alto);
`;

export default Frame6;
