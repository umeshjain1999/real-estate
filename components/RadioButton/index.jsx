import React from "react";
import styled from "styled-components";


function RadioButton(props) {
  const { icon, object, states } = props;

  return (
    <RadioButton1>
      <OverlapGroup>
        <Icon src={icon} />
        <Icon src={object} />
        <States src={states} />
      </OverlapGroup>
    </RadioButton1>
  );
}

const RadioButton1 = styled.div`
  height: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 20px;
`;

const OverlapGroup = styled.div`
  width: 33px;
  height: 33px;
  position: relative;
  margin-left: -7px;
  margin-top: -6.67px;
`;

const Icon = styled.img`
  position: absolute;
  width: 17px;
  height: 17px;
  top: 8px;
  left: 8px;
`;

const States = styled.img`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 0;
  left: 0;
`;

export default RadioButton;
