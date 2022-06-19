import React from "react";
import styled from "styled-components";
import { CircularstdBookNormalBlack14px, CircularstdMediumBlack24px } from "../../styledMixins";


function Frame437() {
  return (
    <Frame4371>
      <Company>Company</Company>
      <CareersAboutUsFor>
        Careers
        <br />
        About Us
        <br />
        For Partners
        <br />
        Terms
        <br />
        Privacy Policy
        <br />
        Contact Us
        <br />
        Unsubscribe
      </CareersAboutUsFor>
    </Frame4371>
  );
}

const Frame4371 = styled.div`
  width: 132px;
  height: 155px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
`;

const Company = styled.div`
  ${CircularstdMediumBlack24px}
  margin-right: 25px;
  width: 107px;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const CareersAboutUsFor = styled.p`
  ${CircularstdBookNormalBlack14px}
  margin-right: 41px;
  width: 91px;
  height: 140px;
  margin-top: 27px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Frame437;
