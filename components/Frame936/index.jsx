import React from "react";
import Divider05 from "../Divider05";
import styled from "styled-components";
import {
  CircularstdBookNormalWhite16px,
  CircularstdBookNormalWhite13px,
  CircularstdBookNormalWhite14px,
} from "../../styledMixins";


function Frame936(props) {
  const { className } = props;

  return (
    <Frame9361 className={`frame-936 ${className || ""}`}>
      <FlexCol className="flex-col-3">
        <LoremIpsumDolorS className="lorem-ipsum-dolor-s-1">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis elit id erat phasellus. Vitae
          morbi ac proin blandit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida pharetra felis
          elit id erat phasellus.
        </LoremIpsumDolorS>
        <Divider05 />
      </FlexCol>
      <FlexRow className="flex-row-1">
        <Ellipse4
          className="ellipse-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/62af2dcdf1e6f9b16eaa21a7/releases/62af2eddce1cf6ae325f421a/img/ellipse-4@2x.png"
        />
        <FlexCol1 className="flex-col-4">
          <Name className="name-1">Abel Willams</Name>
          <ZoomInc className="zoom-inc">Zoom Inc</ZoomInc>
        </FlexCol1>
      </FlexRow>
    </Frame9361>
  );
}

const Frame9361 = styled.div`
  position: absolute;
  width: 300px;
  top: 216px;
  left: 198px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 203px;

  &.frame-936.frame-937 {
    left: 598px;
  }
`;

const FlexCol = styled.div`
  width: 300px;
  position: relative;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 132px;
`;

const LoremIpsumDolorS = styled.p`
  ${CircularstdBookNormalWhite14px}
  width: 300px;
  min-height: 120px;
  letter-spacing: 0;
  line-height: 20px;
`;

const FlexRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  min-width: 184px;
`;

const Ellipse4 = styled.img`
  width: 62px;
  height: 62px;
`;

const FlexCol1 = styled.div`
  width: 97px;
  margin-left: 25px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 41px;
`;

const Name = styled.div`
  ${CircularstdBookNormalWhite16px}
  min-height: 20px;
  letter-spacing: 0.16px;
`;

const ZoomInc = styled.div`
  ${CircularstdBookNormalWhite13px}
  min-height: 16px;
  margin-top: 5px;
  letter-spacing: 0;
`;

export default Frame936;
