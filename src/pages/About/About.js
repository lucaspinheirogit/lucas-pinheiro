import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import { JavaScript, NodeJS, ReactJS } from 'assets/images'
import { CONTENT } from './constants'

import {
  Container,
  InnerContainer,
  Title,
  ContentContainer,
  Content,
  ContentImageContainer,
  ContentImage,
  ContentText,
  CarouselImage
} from './About.styled'

const About = () => (
  <Container id="ABOUT">
    <InnerContainer>
      <Title>Sobre</Title>
      <ContentContainer>
        {CONTENT.map(({ img, text }) => (
          <Content>
            <ContentImageContainer>
              <ContentImage src={img} />
            </ContentImageContainer>
            <ContentText>{text}</ContentText>
          </Content>
        ))}
      </ContentContainer>

      <Carousel
        slidesPerPage={3}
        infinite
        animationSpeed={2000}
        autoPlay={10000}
        stopAutoPlayOnHover
      >
        <CarouselImage src={JavaScript} />
        <CarouselImage src={NodeJS} />
        <CarouselImage src={ReactJS} />
      </Carousel>
    </InnerContainer>
  </Container>
)

export default About
