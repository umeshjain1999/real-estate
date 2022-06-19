import React from "react";
import Navigation from "../Navigation";
import RadioButton from "../RadioButton";
import Button3 from "../Button3";
import ProductCardVertical2 from "../ProductCardVertical2";
import Frame22 from "../Frame22";
import ProductCardVertical3 from "../ProductCardVertical3";
import Frame936 from "../Frame936";
import ProductCardHorizontal from "../ProductCardHorizontal";
import Button5 from "../Button5";
import Frame437 from "../Frame437";
import Frame436 from "../Frame436";
import styled from "styled-components";
import {
  CircularstdMediumBlack24px,
  CircularstdBookNormalBlack14px,
  CircularstdBookNormalBlack40px,
  CircularstdBoldWhite40px,
  CircularstdBookNormalWhite14px,
  CircularstdMediumWhite24px,
  ValignTextMiddle,
  CircularstdBoldBlack40px,
  CircularstdBookNormalWhite24px,
  CircularstdBookNormalPinkSwan13px,
  CircularstdBookNormalElectricViolet,
  CircularstdBookNormalBlack16px,
  Border1pxGreyOutline,
} from "../../styledMixins";
// import "./HomeDesktop.css";

function HomeDesktop(props) {
  const {
    findYourDreamHome,
    exploreNewApartmen,
    image,
    polygon1,
    howSqfthomeCanHelp,
    sqfthomeProvidesAnAwesomeSolution,
    buyAHome,
    withOver1Million1,
    rentAHome,
    withOver1Million2,
    polygon2,
    buy,
    radioButton,
    rent,
    navigation1,
    searchByLocation,
    dropdown,
    residential,
    weProvideBuyAndS,
    loremIpsumDolorSi,
    abstractLogoWhite,
    beazerHomesLogoWhite,
    hippoLogoWhite,
    airbnbLogoWhite,
    pultegroupLogoWhite,
    anchorLogoWhite,
    polygon4,
    polygon3,
    homesForSaleNearYou,
    checkOutSomeOfOurLatestProperties,
    houseforsaleConverted1,
    weAreCommittedTo,
    whatPeopleSay,
    format_Quote,
    newlyAddedResaleProperty,
    findTheHotSpotResaleProperties,
    frame1005,
    ourTeam,
    maskGroup1,
    maskGroup2,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    loremIpsumDolorS,
    logo1,
    product,
    homeAboutProjectsContact,
    rectangle1145,
    navigationProps,
    radioButtonProps,
    button3Props,
    productCardVertical21Props,
    productCardVertical22Props,
    productCardVertical23Props,
    frame22Props,
    productCardVertical3Props,
    frame936Props,
    productCardHorizontal1Props,
    productCardHorizontal2Props,
    productCardHorizontal3Props,
    productCardHorizontal4Props,
    button5Props,
  } = props;

  const Banner = () => {
    return (
      <Image>
        <Image1 src={image} />
        <OverlapGroup>
          <FindYourDreamHome>{findYourDreamHome}</FindYourDreamHome>
          <ExploreNewApartmen>{exploreNewApartmen}</ExploreNewApartmen>
        </OverlapGroup>
      </Image>
    );
  };
  const InfoBanner = () => {
    return (
      <Frame934>
        <Polygon1 src={polygon1} />
        <FlexCol>
          <HowSqfthomeCanHelp>{howSqfthomeCanHelp}</HowSqfthomeCanHelp>
          <SqfthomeProvidesAnAwesomeSolution>
            {sqfthomeProvidesAnAwesomeSolution}
          </SqfthomeProvidesAnAwesomeSolution>
          <FrameContainer>
            <Frame412>
              <BuyAHome>{buyAHome}</BuyAHome>
              <WithOver1Million>{withOver1Million1}</WithOver1Million>
            </Frame412>
            <Frame411>
              <RentAHome>{rentAHome}</RentAHome>
              <WithOver1Million>{withOver1Million2}</WithOver1Million>
            </Frame411>
          </FrameContainer>
        </FlexCol>
        <Polygon2 src={polygon2} />
      </Frame934>
    );
  };
  const SearchBarComp = () => {
    return (
      <SearchBar>
        <RentBuySwitch>
          <Buy>
            <RadioButton
              icon={radioButtonProps.icon}
              object={radioButtonProps.object}
              states={radioButtonProps.states}
            />
            <Buy1>{buy}</Buy1>
          </Buy>
          <Rent>
            <RadioButton1 src={radioButton} />
            <Rent1>{rent}</Rent1>
          </Rent>
        </RentBuySwitch>
        <SearchBar1>
          <Location>
            <Navigation1 src={navigation1} />
            <SearchByLocation>{searchByLocation}</SearchByLocation>
          </Location>
          <Type>
            <Dropdown src={dropdown} />
            <Residential>{residential}</Residential>
          </Type>
        </SearchBar1>
        <Button3 icons={button3Props.icons} search={button3Props.search} />
      </SearchBar>
    );
  };
  const InfoBanner2 = () => {
    return (
      <Frame1007>
        <FlexCol1>
          <WeProvideBuyAndS className="animate-enter">
            {weProvideBuyAndS}
          </WeProvideBuyAndS>
          <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
          <Frame931>
            <LogoWhiteContainer>
              <AbstractlogoWhite src={abstractLogoWhite} />
              <BeazerHomeslogoWhite src={beazerHomesLogoWhite} />
            </LogoWhiteContainer>
            <LogoWhiteContainer1>
              <HippologoWhite src={hippoLogoWhite} />
              <AirbnblogoWhite src={airbnbLogoWhite} />
            </LogoWhiteContainer1>
            <LogoWhiteContainer2>
              <PulteGrouplogoWhite src={pultegroupLogoWhite} />
              <AnchorlogoWhite src={anchorLogoWhite} />
            </LogoWhiteContainer2>
          </Frame931>
        </FlexCol1>
        <PolygonContainer>
          <Polygon4 src={polygon4} />
          <Polygon3 src={polygon3} />
        </PolygonContainer>
      </Frame1007>
    );
  };
  return (
    <div className="container-center-horizontal">
      <div className="home-desktop screen">
        <Navigation
          iconsProfile={navigationProps.iconsProfile}
          projects1Props={navigationProps.projects1Props}
          projects2Props={navigationProps.projects2Props}
          buttonProps={navigationProps.buttonProps}
        />
        <OverlapGroup9>
          <Banner />
          <InfoBanner />
          <SearchBarComp />
          <InfoBanner2 />
        </OverlapGroup9>
        <Frame1006>
          <Group409>
            <HomesForSaleNearYou>{homesForSaleNearYou}</HomesForSaleNearYou>
            <CheckOutSomeOfOurLatestProperties>
              {checkOutSomeOfOurLatestProperties}
            </CheckOutSomeOfOurLatestProperties>
          </Group409>
          {/* <Frame933>
            <ProductCardVertical2
              image={productCardVertical21Props.image}
              x20000={productCardVertical21Props.x20000}
              addressProps={productCardVertical21Props.addressProps}
              footerProps={productCardVertical21Props.footerProps}
            />
            <ProductCardVertical2
              image={productCardVertical22Props.image}
              x20000={productCardVertical22Props.x20000}
              className={productCardVertical22Props.className}
              addressProps={productCardVertical22Props.addressProps}
              footerProps={productCardVertical22Props.footerProps}
            />
            <OverlapGroup1>
              <ProductCardVertical2
                image={productCardVertical23Props.image}
                x20000={productCardVertical23Props.x20000}
                className={productCardVertical23Props.className}
                addressProps={productCardVertical23Props.addressProps}
                footerProps={productCardVertical23Props.footerProps}
              />
              <Frame22 src={frame22Props.src} />
            </OverlapGroup1>
            <ProductCardVertical3 {...productCardVertical3Props} />
          </Frame933> */}
        </Frame1006>
      </div>
    </div>
  );
}

function A() {
  return (
    <div>
     
      <Frame1003>
        <OverlapGroup7>
          <HouseForSaleConverted1 src={houseforsaleConverted1} />
          <WeAreCommittedTo>{weAreCommittedTo}</WeAreCommittedTo>
        </OverlapGroup7>
        <WhatPeopleSay>{whatPeopleSay}</WhatPeopleSay>
        <OverlapGroup8>
          <Frame936 />
          <FormatQuote src={format_Quote} />
        </OverlapGroup8>
        <Frame936 className={frame936Props.className} />
      </Frame1003>
      <Frame1004>
        <NewlyAddedResaleProperty>
          {newlyAddedResaleProperty}
        </NewlyAddedResaleProperty>
        <FindTheHotSpotResaleProperties>
          {findTheHotSpotResaleProperties}
        </FindTheHotSpotResaleProperties>
        <ProductCardHorizontalContainer>
          <ProductCardHorizontal
            image={productCardHorizontal1Props.image}
            frame11Props={productCardHorizontal1Props.frame11Props}
            frame12Props={productCardHorizontal1Props.frame12Props}
            frame13Props={productCardHorizontal1Props.frame13Props}
            frame5Props={productCardHorizontal1Props.frame5Props}
            frame4Props={productCardHorizontal1Props.frame4Props}
          />
          <ProductCardHorizontal
            image={productCardHorizontal2Props.image}
            className={productCardHorizontal2Props.className}
            frame11Props={productCardHorizontal2Props.frame11Props}
            frame12Props={productCardHorizontal2Props.frame12Props}
            frame13Props={productCardHorizontal2Props.frame13Props}
            frame5Props={productCardHorizontal2Props.frame5Props}
            frame4Props={productCardHorizontal2Props.frame4Props}
          />
        </ProductCardHorizontalContainer>
        <ProductCardHorizontalContainer1>
          <ProductCardHorizontal
            image={productCardHorizontal3Props.image}
            className={productCardHorizontal3Props.className}
            frame11Props={productCardHorizontal3Props.frame11Props}
            frame12Props={productCardHorizontal3Props.frame12Props}
            frame13Props={productCardHorizontal3Props.frame13Props}
            frame5Props={productCardHorizontal3Props.frame5Props}
            frame4Props={productCardHorizontal3Props.frame4Props}
          />
          <ProductCardHorizontal
            image={productCardHorizontal4Props.image}
            className={productCardHorizontal4Props.className}
            frame11Props={productCardHorizontal4Props.frame11Props}
            frame12Props={productCardHorizontal4Props.frame12Props}
            frame13Props={productCardHorizontal4Props.frame13Props}
            frame5Props={productCardHorizontal4Props.frame5Props}
            frame4Props={productCardHorizontal4Props.frame4Props}
          />
        </ProductCardHorizontalContainer1>
        <Button5>{button5Props.children}</Button5>
      </Frame1004>
      <Frame1005 style={{ backgroundImage: `url(${frame1005})` }}>
        <OverlapGroup6>
          <FlexCol2>
            <OurTeam>{ourTeam}</OurTeam>
            <Group410>
              <Frame958>
                <MaskGroup src={maskGroup1} />
                <MaskGroup1 src={maskGroup2} />
              </Frame958>
              <FlexRow>
                <Name>
                  <span className="circularstd-medium-white-24px">
                    {spanText1}
                  </span>
                  <span className="circularstd-regular-normal-white-24px">
                    {spanText2}
                  </span>
                </Name>
                <AmitLalCoFounder>
                  <span className="circularstd-medium-white-24px">
                    {spanText3}
                  </span>
                  <span className="circularstd-regular-normal-white-24px">
                    {spanText4}
                  </span>
                </AmitLalCoFounder>
              </FlexRow>
            </Group410>
          </FlexCol2>
          <LoremIpsumDolorS>{loremIpsumDolorS}</LoremIpsumDolorS>
        </OverlapGroup6>
      </Frame1005>
      <Frame963>
        <OverlapGroup5>
          <Logo1 src={logo1} />
          <Frame959>
            <Frame435>
              <Product>{product}</Product>
              <HomeAboutProjectsContact>
                {homeAboutProjectsContact}
              </HomeAboutProjectsContact>
            </Frame435>
            <Frame437 />
            <Frame436 />
          </Frame959>
        </OverlapGroup5>
        <Rectangle1145 src={rectangle1145} />
      </Frame963>
    </div>
  );
}

const OverlapGroup9 = styled.div`
  width: 100%;
  height: 1740px;
  position: relative;
  margin-right: -302.14px;
`;

const Image = styled.div`
  position: absolute;
  height: 550px;
  top: 0;
  /* left: 308px; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* min-width: 1440px; */
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 100%;
  margin-bottom: -9px;
  display: flex;
  flex-direction: column;
  padding: 47px 194px;
  align-items: flex-start;
  min-height: 453px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.6200000047683716) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const FindYourDreamHome = styled.h1`
  ${ValignTextMiddle}
  height: 162px;
  align-self: center;
  margin-right: 7px;
  min-width: 397px;
  font-family: var(--font-family-circular_std-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxxl);
  text-align: center;
  letter-spacing: 0.64px;
`;

const ExploreNewApartmen = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalWhite24px}
            height: 32px;
  width: 100%;
  /* min-width: 958px; */
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Image1 = styled.img`
  width: 100%;
  height: 550px;
  /* margin-left: 41px; */
`;

const Frame934 = styled.div`
  position: absolute;
  height: 766px;
  top: 555px;
  left: 0;
  display: flex;
  width: 100%;
  /* padding: 0 161.6px; */
  align-items: stretch;
  justify-content: space-between;
  /* min-width: 2050px; */
`;

const Polygon1 = styled.img`
  width: 310px;
  height: 709px;
  /* margin-left: -200px; */
  margin-top: -19.77px;
`;

const FlexCol = styled.div`
  /* width: 689px; */
  align-self: center;
  /* margin-left: 187px; */
  margin-bottom: 201.14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 337px;
`;

const HowSqfthomeCanHelp = styled.div`
  ${CircularstdBoldBlack40px}
  min-height: 53px;
  margin-left: 31px;
  min-width: 454px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const SqfthomeProvidesAnAwesomeSolution = styled.div`
  ${CircularstdBookNormalElectricViolet}
  min-height: 32px;
  margin-top: 5px;
  margin-left: 31px;
  min-width: 444px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const FrameContainer = styled.div`
  height: 182px;
  margin-top: 65px;
  display: flex;
  align-items: flex-start;
  min-width: 689px;
`;

const Frame412 = styled.div`
  width: 250px;
  height: 138px;
  display: flex;
  flex-direction: column;
`;

const BuyAHome = styled.div`
  ${CircularstdBookNormalBlack40px}
  margin-left: 18px;
  width: 213px;
  height: 53px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const WithOver1Million = styled.p`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack14px}
            height: 80px;
  margin-top: 5px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
`;

const Frame411 = styled.div`
  width: 250px;
  height: 138px;
  align-self: flex-end;
  margin-left: 189px;
  display: flex;
  flex-direction: column;
`;

const RentAHome = styled.div`
  ${CircularstdBookNormalBlack40px}
  margin-left: 10px;
  width: 229px;
  height: 53px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const Polygon2 = styled.img`
  width: 319px;
  height: 672px;
  /* margin-left: 154px; */
  /* margin-right:0200px ; */
  margin-top: -73px;
`;

const SearchBar = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  height: 120px;
  top: 490px;
  /* left: 509px; */
  display: flex;
  padding: 0 41px;
  margin-left: 150px;
  margin-right: 150px;
  align-items: center;
  /* min-width: 1037px; */
  background-color: var(--white);
  border-radius: 20px;
`;

const RentBuySwitch = styled.div`
  width: 128px;
  display: flex;
`;

const Buy = styled.div`
  width: 56px;
  position: relative;
  display: flex;
`;

const Buy1 = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack16px}
            width: 28px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0.16px;
`;

const Rent = styled.div`
  width: 62px;
  margin-left: 10px;
  display: flex;
`;

const RadioButton1 = styled.img`
  width: 20px;
  height: 20px;
`;

const Rent1 = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalBlack16px}
            width: 34px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0.16px;
`;

const SearchBar1 = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 634px;
`;

const Location = styled.div`
  ${Border1pxGreyOutline}
  width: 400px;
  height: 40px;
  display: flex;
  padding: 10px 14.6px;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
`;

const Navigation1 = styled.img`
  width: 14px;
  height: 14px;
  align-self: center;
  margin-bottom: 2.19px;
`;

const SearchByLocation = styled.p`
  ${ValignTextMiddle}
  ${CircularstdBookNormalPinkSwan13px}
            height: 16px;
  margin-left: 14px;
  letter-spacing: 0;
`;

const Type = styled.div`
  ${Border1pxGreyOutline}
  width: 214px;
  height: 40px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
`;

const Dropdown = styled.img`
  margin-top: 9px;
  width: 23px;
  height: 23px;
  margin-left: 19px;
`;

const Residential = styled.div`
  ${ValignTextMiddle}
  ${CircularstdBookNormalPinkSwan13px}
            margin-top: 12px;
  width: 65px;
  height: 16px;
  margin-right: 98px;
  letter-spacing: 0;
`;

const Frame1007 = styled.div`
  position: absolute;
  height: 558px;
  top: 1182px;
  /* left: 308px; */
  display: flex;
  padding: 0 111.3px;
  justify-content: flex-end;
  align-items: center;
  /* min-width: 1440px; */
  background-color: var(--white);
`;

const FlexCol1 = styled.div`
  width: 565px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 410px;
`;

const WeProvideBuyAndS = styled.div`
  ${CircularstdBoldBlack40px}
  width: 565px;
  min-height: 159px;
  letter-spacing: 0.4px;
  line-height: 53px;
  opacity: 0;
  transform: translate(25px, 0);

  &.animate-enter {
    animation: animate-enter-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const LoremIpsumDolorSi = styled.p`
  ${CircularstdBookNormalBlack14px}
  width: 440px;
  min-height: 80px;
  margin-top: 10px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Frame931 = styled.div`
  width: 509px;
  height: 130px;
  margin-top: 31px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const LogoWhiteContainer = styled.div`
  width: 161px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 130px;
`;

const AbstractlogoWhite = styled.img`
  width: 161px;
  height: 40px;
`;

const BeazerHomeslogoWhite = styled.img`
  width: 154px;
  height: 40px;
  margin-top: 50px;
  margin-left: 4px;
`;

const LogoWhiteContainer1 = styled.div`
  width: 128px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 130px;
`;

const HippologoWhite = styled.img`
  width: 106px;
  height: 40px;
  margin-right: 0.5px;
`;

const AirbnblogoWhite = styled.img`
  width: 128px;
  height: 40px;
  margin-top: 50px;
`;

const LogoWhiteContainer2 = styled.div`
  width: 120px;
  margin-left: 50px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 130px;
`;

const PulteGrouplogoWhite = styled.img`
  width: 51px;
  height: 40px;
  margin-left: 0.56px;
`;

const AnchorlogoWhite = styled.img`
  width: 120px;
  height: 40px;
  margin-top: 50px;
`;

const PolygonContainer = styled.div`
  width: 549px;
  height: 470px;
  position: relative;
  margin-left: 14px;
`;

const Polygon4 = styled.img`
  position: absolute;
  width: 326px;
  height: 378px;
  top: 46px;
  left: 223px;
`;

const Polygon3 = styled.img`
  position: absolute;
  width: 408px;
  height: 470px;
  top: 0;
  left: 0;
`;

const Frame1006 = styled.div`
  width: 100%;
  height: 490px;
  margin-top: 70px;
  /* margin-right: -281px; */
  display: flex;
  flex-direction: column;
`;

const Group409 = styled.div`
  margin-left: 285px;
  width: 472px;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

const HomesForSaleNearYou = styled.div`
  ${CircularstdBoldBlack40px}
  width: 468px;
  height: 53px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const CheckOutSomeOfOurLatestProperties = styled.div`
  ${CircularstdBookNormalElectricViolet}
  margin-left: 16px;
  width: 435px;
  height: 32px;
  margin-top: 5px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Frame933 = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  min-width: 1520px;
`;

const OverlapGroup1 = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  margin-left: 40px;
`;

const Frame1003 = styled.div`
  width: 1440px;
  height: 507px;
  position: relative;
  margin-top: 50px;
  background-color: var(--electric-violet);
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 1070px;
  height: 451px;
  top: 56px;
  left: 370px;
`;

const HouseForSaleConverted1 = styled.img`
  position: absolute;
  width: 463px;
  height: 451px;
  top: 0;
  left: 607px;
`;

const WeAreCommittedTo = styled.div`
  ${CircularstdBookNormalWhite24px}
  position: absolute;
  top: 57px;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const WhatPeopleSay = styled.div`
  ${CircularstdBoldWhite40px}
  position: absolute;
  top: 55px;
  left: 562px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 498px;
  height: 419px;
  top: 0;
  left: 0;
`;

const FormatQuote = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  left: 0;
`;

const Frame1004 = styled.div`
  width: 1440px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 140px;
  align-items: center;
  min-height: 814px;
  background-color: var(--white);
`;

const NewlyAddedResaleProperty = styled.div`
  ${CircularstdBoldBlack40px}
  min-height: 53px;
  margin-top: 5px;
  margin-right: 1px;
  min-width: 561px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const FindTheHotSpotResaleProperties = styled.div`
  min-height: 32px;
  margin-top: 5px;
  margin-right: 1px;
  min-width: 371px;
  font-family: var(--font-family-circular_std-book);
  font-weight: 400;
  color: var(--caribbean-green);
  font-size: var(--font-size-xxl2);
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const ProductCardHorizontalContainer = styled.div`
  height: 200px;
  position: relative;
  align-self: flex-start;
  margin-top: 51px;
  display: flex;
  align-items: flex-start;
  min-width: 1135px;
`;

const ProductCardHorizontalContainer1 = styled.div`
  height: 200px;
  position: relative;
  align-self: flex-start;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  min-width: 1135px;
`;

const Frame1005 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1440px;
  background-size: 100% 100%;
`;

const OverlapGroup6 = styled.div`
  height: 631px;
  display: flex;
  padding: 57px 140px;
  align-items: center;
  min-width: 1440px;
  background: linear-gradient(
    180deg,
    rgb(156.00000590085983, 25.000000409781933, 224.000001847744) 0%,
    rgba(156.00000590085983, 25.000000409781933, 224.000001847744, 0) 100%
  );
`;

const FlexCol2 = styled.div`
  width: 672px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 505px;
`;

const OurTeam = styled.div`
  ${CircularstdBoldWhite40px}
  min-height: 53px;
  align-self: flex-end;
  min-width: 185px;
  letter-spacing: 0.4px;
  line-height: 53px;
  white-space: nowrap;
`;

const Group410 = styled.div`
  width: 557px;
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 401px;
`;

const Frame958 = styled.div`
  width: 553px;
  margin-right: 4px;
  display: flex;
  overflow: hidden;
`;

const MaskGroup = styled.img`
  margin-top: 10px;
  width: 279px;
  height: 310px;
  margin-left: -15px;
`;

const MaskGroup1 = styled.img`
  margin-top: 10px;
  width: 279px;
  height: 310px;
  margin-left: 25px;
`;

const FlexRow = styled.div`
  ${CircularstdMediumWhite24px}
  height: 64px;
  margin-top: 27px;
  margin-right: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 438px;
`;

const Name = styled.div`
  min-height: 64px;
  min-width: 139px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
`;

const AmitLalCoFounder = styled.div`
  min-height: 64px;
  margin-left: 170px;
  min-width: 129px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
`;

const LoremIpsumDolorS = styled.p`
  ${CircularstdBookNormalWhite14px}
  width: 402px;
  min-height: 240px;
  margin-left: 2px;
  margin-top: 23px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Frame963 = styled.div`
  width: 1440px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const OverlapGroup5 = styled.div`
  height: 300px;
  display: flex;
  padding: 44px 140px;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
`;

const Logo1 = styled.img`
  width: 235px;
  height: 129px;
  margin-bottom: 9px;
`;

const Frame959 = styled.div`
  width: 677px;
  height: 174px;
  position: relative;
  align-self: flex-end;
  margin-left: 248px;
  display: flex;
`;

const Frame435 = styled.div`
  width: 77px;
  height: 155px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
`;

const Product = styled.div`
  ${CircularstdMediumBlack24px}
  margin-right: -10px;
  width: 87px;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const HomeAboutProjectsContact = styled.div`
  ${CircularstdBookNormalBlack14px}
  margin-right: 25px;
  width: 52px;
  height: 80px;
  margin-top: 27px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Rectangle1145 = styled.img`
  width: 1440px;
  height: 300px;
`;

export default HomeDesktop;
