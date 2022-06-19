import React from "react";
import Projects from "../Projects";
import Button from "../Button";
import styled from "styled-components";
import { CircularstdBookNormalBlack14px } from "../../styledMixins";


function Navigation(props) {
  const { iconsProfile, projects1Props, projects2Props, buttonProps } = props;

  return (
    <Navigation1>
      <Logo>
        <Logo1 src="https://anima-uploads.s3.amazonaws.com/projects/62af2dcdf1e6f9b16eaa21a7/releases/62af2eddce1cf6ae325f421a/img/logo@2x.png" />
      </Logo>
      <Menus>
        <Frame1>
          <Home>
            <Place>Home</Place>
          </Home>
          <Projects>{projects1Props.children}</Projects>
          <Projects className={projects2Props.className}>{projects2Props.children}</Projects>
          <LoginRegister>
            <LoginRegister1>
              <Place>Login/Register</Place>
            </LoginRegister1>
            <ProfileIcon>
              <Iconsprofile src={iconsProfile} />
            </ProfileIcon>
          </LoginRegister>
          <Frame964>
            <Button icons={buttonProps.icons} search={buttonProps.search} />
          </Frame964>
        </Frame1>
      </Menus>
    </Navigation1>
  );
}

const Navigation1 = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const Logo = styled.div`
  width: 209px;
  margin-left: 140px;
  display: flex;
`;

const Logo1 = styled.img`
  width: 249.2763671875px;
  height: 78px;
  margin-left: -20.1px;
`;

const Menus = styled.div`
  width: 666px;
  height: 78px;
  margin-left: 304px;
  display: flex;
`;

const Frame1 = styled.div`
  margin-top: 9px;
  width: 648px;
  margin-left: 9px;
  position: relative;
  display: flex;
`;

const Home = styled.div`
  margin-top: 10px;
  height: 40px;
  display: flex;
  padding: 9px 10px;
  align-items: flex-start;
  min-width: 58px;
`;

const Place = styled.div`
  ${CircularstdBookNormalBlack14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const LoginRegister = styled.div`
  margin-top: 10px;
  width: 121px;
  margin-left: 40px;
  display: flex;
`;

const LoginRegister1 = styled.div`
  height: 40px;
  display: flex;
  padding: 9px 0;
  align-items: flex-start;
  min-width: 93px;
`;

const ProfileIcon = styled.div`
  width: 20px;
  height: 40px;
  margin-left: 8px;
  display: flex;
`;

const Iconsprofile = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
`;

const Frame964 = styled.div`
  width: 164px;
  height: 60px;
  position: relative;
  margin-left: 40px;
  display: flex;
`;

export default Navigation;
