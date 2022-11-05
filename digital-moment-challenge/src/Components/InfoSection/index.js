import React from "react";
import { Button } from "../InfoSection/Button";
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
import Image from "../../Images/undraw_browsing_online_re_umsa (1).svg";
import { useState } from "react";

const InfoSection = () => {
  const [isHovering, setIsHovering] = useState(true);

  const [hover, setHover] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Communication</Heading>
                <Subtitle>
                  Be able to communicate with other youth and share ideas for
                  some challenges!
                </Subtitle>
                <BtnWrap>
                  <Button
                    onMouseOver={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                  >
                    Get Started
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

export default InfoSection;
