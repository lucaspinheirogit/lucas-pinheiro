import React from 'react'

import { PrimaryButton } from 'components/Buttons'
import DefaultPage from 'components/DefaultPage'

import {
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
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10
}

const Projects = () => (
  <DefaultPage id="PROJECTS" title="Projetos">
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
  </DefaultPage>
)

export default Projects
