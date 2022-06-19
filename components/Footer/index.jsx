import React from "react";
import Frame1 from "../Frame1";
import Frame5 from "../Frame5";
import Frame4 from "../Frame4";
import styled from "styled-components";


function Footer(props) {
  const { frame11Props, frame12Props, frame13Props, frame5Props, frame4Props } = props;

  return (
    <Footer1>
      <Frame7>
        <Frame1 bed={frame11Props.bed} number={frame11Props.number} />
        <Frame1 bed={frame12Props.bed} number={frame12Props.number} className={frame12Props.className} />
        <Frame1 bed={frame13Props.bed} number={frame13Props.number} className={frame13Props.className} />
        <Frame5 favorite={frame5Props.favorite} />
        <Frame4 center_Focus_Strong={frame4Props.center_Focus_Strong} />
      </Frame7>
    </Footer1>
  );
}

const Footer1 = styled.div`
  width: 350px;
  height: 35.5px;
  display: flex;
  background-color: var(--white);
`;

const Frame7 = styled.div`
  margin-top: 8px;
  width: 350px;
  height: 19.5px;
  position: relative;
  display: flex;
`;

export default Footer;
