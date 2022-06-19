import React from "react";
import Frame21 from "../Frame21";
import Frame1 from "../Frame1";
import Frame5 from "../Frame5";
import Frame4 from "../Frame4";
import styled from "styled-components";
import {
  CircularstdBookNormalPinkSwan13px,
  CircularstdMediumBlack24px,
  ValignTextBottom,
  CircularstdBookNormalPinkSwan16px,
  Border1pxGreyOutline,
} from "../../styledMixins";


function ProductCardHorizontal(props) {
  const { image, className, frame11Props, frame12Props, frame13Props, frame5Props, frame4Props } = props;

  return (
    <ProductCardHorizontal1 className={`product-card-horizontal ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1">
        <Image className="image-5" style={{ backgroundImage: `url(${image})` }}></Image>
        <TextCard className="text-card-2">
          <Divider className="divider-3">
            <NameTitle className="name-title-2">
              <Frame19 className="frame-19-2">
                <Frame20 className="frame-20-2">
                  <Surname className="surname-2">White Forest</Surname>
                </Frame20>
                <Frame21 />
              </Frame19>
              <ByKamdhenuBuilders className="by-kamdhenu-builders-2">By Kamdhenu Builders</ByKamdhenuBuilders>
            </NameTitle>
            <Address className="address-2">
              <PinDrop
                className="pin_drop-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/62af2dcdf1e6f9b16eaa21a7/releases/62af2eddce1cf6ae325f421a/img/pin-drop-1@2x.png"
              />
              <Sector3KhargharNaviMumbai410210 className="sector-3-kharghar-navi-mumbai-410210-1">
                Sector 3, Kharghar, Navi Mumbai 410210
              </Sector3KhargharNaviMumbai410210>
            </Address>
          </Divider>
          <OverlapGroup className="overlap-group-3">
            <Frame6 className="frame-6-1">
              <Rectangle1 className="rectangle-1-1"></Rectangle1>
            </Frame6>
            <Footer className="footer-2">
              <Frame7 className="frame-7-2">
                <Frame1 bed={frame11Props.bed} number={frame11Props.number} className={frame11Props.className} />
                <Frame1 bed={frame12Props.bed} number={frame12Props.number} className={frame12Props.className} />
                <Frame1 bed={frame13Props.bed} number={frame13Props.number} className={frame13Props.className} />
                <Frame5 favorite={frame5Props.favorite} className={frame5Props.className} />
                <Frame4 center_Focus_Strong={frame4Props.center_Focus_Strong} className={frame4Props.className} />
              </Frame7>
            </Footer>
          </OverlapGroup>
        </TextCard>
      </OverlapGroup1>
    </ProductCardHorizontal1>
  );
}

const ProductCardHorizontal1 = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-start;
  min-width: 550px;

  &.product-card-horizontal.product-card-horizontal-1 {
    margin-left: 35px;
  }

  &.product-card-horizontal.product-card-horizontal-3 {
    margin-left: 35px;
  }
`;

const OverlapGroup1 = styled.div`
  width: 551px;
  height: 202px;
  position: relative;
  margin-top: -1px;
`;

const Image = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 1px;
  left: 0;
  background-size: 100% 100%;
`;

const TextCard = styled.div`
  ${Border1pxGreyOutline}
  position: absolute;
  width: 352px;
  top: 0;
  left: 199px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 202px;
`;

const Divider = styled.div`
  width: 350px;
  height: 168px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const NameTitle = styled.div`
  margin-left: 20px;
  width: 330px;
  height: 54px;
  margin-top: 43.5px;
  display: flex;
  flex-direction: column;
`;

const Frame19 = styled.div`
  width: 330px;
  position: relative;
  display: flex;
`;

const Frame20 = styled.div`
  width: 206px;
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

const Address = styled.div`
  margin-left: 20px;
  width: 330px;
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
  width: 308px;
  height: 16px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 350px;
  height: 32px;
  position: relative;
`;

const Frame6 = styled.div`
  position: absolute;
  width: 350px;
  height: 1px;
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--black-haze);
`;

const Rectangle1 = styled.div`
  width: 350px;
  height: 1px;
  background-color: var(--alto);
`;

const Footer = styled.div`
  position: absolute;
  width: 350px;
  height: 32px;
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--white);
`;

const Frame7 = styled.div`
  margin-top: 4px;
  width: 350px;
  height: 24px;
  position: relative;
  display: flex;
`;

export default ProductCardHorizontal;
