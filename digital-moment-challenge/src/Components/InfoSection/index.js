import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import Image from '../../Images/test1.png'

const InfoSection = () => {
  return (
    <>
        <InfoContainer >
            <InfoWrapper>
                <InfoRow >
                    <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Heading>Premium</Heading>
                        <Subtitle>test this</Subtitle>
                        <BtnWrap>
                            <Button to='home'/>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={Image} alt ='communication'/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>

    </>
  )
}

export default InfoSection