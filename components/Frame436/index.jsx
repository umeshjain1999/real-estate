import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalBlack14px, CircularstdMediumBlack24px } from "../../styledMixins";


function Frame436() {
  return (
    <Frame4361>
      <ContactUs>Contact Us</ContactUs>
      <Abcxyzcom911000>
        abc@xyz.com
        <br />
        +91 10000 50002
        <br />
        Fort, Mumbai
      </Abcxyzcom911000>
    </Frame4361>
  );
}

const Frame4361 = styled.div`
  width: 168px;
  height: 131px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ContactUs = styled.div`
  ${CircularstdMediumBlack24px}
  margin-right: 45px;
  width: 123px;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Abcxyzcom911000 = styled.div`
  ${CircularstdBookNormalBlack14px}
  margin-right: 60px;
  width: 108px;
  height: 60px;
  margin-top: 27px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Frame436;
