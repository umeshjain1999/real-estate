import React from "react";
import Divider from "../Divider";
import Frame6 from "../Frame6";
import Frame1 from "../Frame1";
import Frame5 from "../Frame5";
import Frame4 from "../Frame4";
import styled from "styled-components";
import { CircularstdBookNormalBlack16px, ValignTextMiddle } from "../../styledMixins";


function ProductCardVertical3(props) {
  const { image, shower, number, dividerProps, frame11Props, frame12Props, frame5Props, frame4Props } = props;

  return (
    <ProductCardVertical>
      <Image>
        <Image1 src={image} />
      </Image>
      <TextCard>
        <Divider surname={dividerProps.surname} addressProps={dividerProps.addressProps} />
        <Frame6 />
        <Footer>
          <Frame7>
            <Frame1 bed={frame11Props.bed} number={frame11Props.number} />
            <Frame2>
              <Shower src={shower} />
              <Number>{number}</Number>
            </Frame2>
            <Frame1 bed={frame12Props.bed} number={frame12Props.number} className={frame12Props.className} />
            <Frame5 favorite={frame5Props.favorite} />
            <Frame4 center_Focus_Strong={frame4Props.center_Focus_Strong} />
          </Frame7>
        </Footer>
      </TextCard>
    </ProductCardVertical>
  );
}

const ProductCardVertical = styled.div`
  width: 350px;
  height: 350px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  width: 350px;
  display: flex;
`;

const Image1 = styled.img`
  width: 69px;
  height: 204.5px;
  margin-left: 140.5px;
`;

const TextCard = styled.div`
  height: 145.5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
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

const Frame2 = styled.div`
  margin-top: -2.2px;
  width: 34px;
  margin-left: 10px;
  display: flex;
`;

const Shower = styled.img`
  width: 10px;
  height: 24px;
  margin-left: 7px;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack16px}
            margin-top: 2px;
  width: 9px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0.16px;
`;

export default ProductCardVertical3;
