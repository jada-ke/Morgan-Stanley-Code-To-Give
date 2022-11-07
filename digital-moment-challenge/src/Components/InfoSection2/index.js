import React from "react";
import { Button } from "../InfoSection2/Button";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import Image from "../../Images/undraw_thought_process_re_om58.svg";
import { useState } from "react";

const InfoSection2 = () => {
  const [isHovering, setIsHovering] = useState(true);

  const [hover, setHover] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow imgStart = "true">
            <Column1>
              <TextWrapper>
                <TopLine>Ideas</TopLine>
                <Heading></Heading>
                <Subtitle>
                  Share your ideas around the globe. Your ideas matter!
                </Subtitle>
                <BtnWrap>
                  <Button
                    onMouseOver={onHover}
                    onMouseLeave={onHover}
                    primary="false"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    to="/ideas"
                  >
                    Share an Idea!
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Image} alt="communication" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;
