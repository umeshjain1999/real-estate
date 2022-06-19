import React from "react";
import Address from "../Address";
import Frame6 from "../Frame6";
import Footer from "../Footer";
import styled from "styled-components";
import {
  CircularstdMediumElectricViolet24px,
  CircularstdMediumBlack24px,
  ValignTextBottom,
  CircularstdBookNormalPinkSwan16px,
} from "../../styledMixins";


function ProductCardVertical2(props) {
  const { image, x20000, className, addressProps, footerProps } = props;

  return (
    <ProductCardVertical className={`product-card-vertical ${className || ""}`}>
      <Image className="image-2" style={{ backgroundImage: `url(${image})` }}></Image>
      <TextCard className="text-card">
        <Divider className="divider">
          <NameTitle className="name-title">
            <Frame19 className="frame-19">
              <Frame20 className="frame-20">
                <Surname className="surname">White Forest</Surname>
              </Frame20>
              <Frame21 className="frame-21">
                <X20000 className="x20000">{x20000}</X20000>
              </Frame21>
            </Frame19>
            <ByKamdhenuBuilders className="by-kamdhenu-builders">By Kamdhenu Builders</ByKamdhenuBuilders>
          </NameTitle>
          <Address pin_Drop={addressProps.pin_Drop} />
        </Divider>
        <Frame6 />
        <Footer
          frame11Props={footerProps.frame11Props}
          frame12Props={footerProps.frame12Props}
          frame13Props={footerProps.frame13Props}
          frame5Props={footerProps.frame5Props}
          frame4Props={footerProps.frame4Props}
        />
      </TextCard>
    </ProductCardVertical>
  );
}

const ProductCardVertical = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;

  &.product-card-vertical.product-card-vertical-1 {
    margin-left: 40px;
  }

  &.product-card-vertical.product-card-vertical-2 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Image = styled.div`
  height: 204.5px;
  background-size: 100% 100%;
`;

const TextCard = styled.div`
  height: 145.5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
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
  display: flex;
`;

const Frame20 = styled.div`
  width: 178px;
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

const Frame21 = styled.div`
  width: 160px;
  margin-left: 2px;
  display: flex;
`;

const X20000 = styled.div`
  ${ValignTextBottom}
  ${CircularstdMediumElectricViolet24px}
            width: 130px;
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

const Frame201 = styled.div`
  .product-card-vertical.product-card-vertical-1 & {
    width: 181px;
  }
`;

const Frame211 = styled.div`
  .product-card-vertical.product-card-vertical-1 & {
    width: 157px;
  }
`;

const X200001 = styled.div`
  ${ValignTextBottom}
  ${CircularstdMediumElectricViolet24px}
            
            
           .product-card-vertical.product-card-vertical-1  & {
    width: 127px;
  }
`;

const Frame202 = styled.div`
  .product-card-vertical.product-card-vertical-2 & {
    width: 221px;
  }
`;

const Frame212 = styled.div`
  .product-card-vertical.product-card-vertical-2 & {
    width: 117px;
  }
`;

const X200002 = styled.div`
  ${ValignTextBottom}
  ${CircularstdMediumElectricViolet24px}
            
            
           .product-card-vertical.product-card-vertical-2  & {
    width: 87px;
  }
`;

export default ProductCardVertical2;
