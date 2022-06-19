import React from "react";
import styled from "styled-components";


function Frame22(props) {
  const { src } = props;

  return (
    <Frame221>
      <Icons src={src} />
    </Frame221>
  );
}

const Frame221 = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 88px;
  left: 278px;
  display: flex;
  background-color: var(--white);
  border-radius: 20px;
`;

const Icons = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export default Frame22;
