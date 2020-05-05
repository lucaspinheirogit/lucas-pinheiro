import React from 'react'

import { PrimaryButton } from 'components/Buttons'

import {
  Container,
  InnerContainer,
  Title,
  ContentContainer,
  StyledSlider,
  SliderImageContainer,
  SliderImage,
  SliderImageDescription,
  SliderImageDescriptionText
} from './Projects.styled'
import { PROJECTS } from './constants'

const defaultSliderSettings = {
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10
}

const Projects = () => (
  <Container id="PROJECTS">
    <InnerContainer>
      <Title>PROJETOS</Title>
      <ContentContainer>
        <StyledSlider {...defaultSliderSettings}>
          {PROJECTS.map(({ id, img, mobileImg, text }) => (
            <SliderImageContainer key={id}>
              <SliderImage src={img} />
              <SliderImage mobile src={mobileImg} />
              <SliderImageDescription>
                <SliderImageDescriptionText>{text}</SliderImageDescriptionText>
                <PrimaryButton size="small" label="Ver mais" />
              </SliderImageDescription>
            </SliderImageContainer>
          ))}
        </StyledSlider>
      </ContentContainer>
    </InnerContainer>
  </Container>
)

export default Projects
