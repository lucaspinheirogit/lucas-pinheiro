import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'
import { useWindowDimensions } from 'hooks'

import {
  StyledSlider,
  SliderImageContainer,
  SliderImage,
  SliderImageDescription,
  SliderImageDescriptionText,
  ButtonsContainer,
  StyledLinkButton
} from './Projects.styled'
import { PROJECTS } from './constants'

const defaultSliderSettings = {
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10
}

const Projects = () => {
  const { width } = useWindowDimensions()

  const isMobile = width < 768

  return (
    <DefaultPage id="PROJECTS" title="Projetos">
      <Zoom>
        <StyledSlider {...defaultSliderSettings}>
          {PROJECTS.map(({ id, img, mobileImg, description, codeUrl, appUrl }) => (
            <SliderImageContainer key={id}>
              <SliderImage src={isMobile ? mobileImg : img} />
              <SliderImageDescription>
                <SliderImageDescriptionText>{description}</SliderImageDescriptionText>
                <ButtonsContainer>
                  {codeUrl && (
                    <StyledLinkButton
                      href={codeUrl}
                      target="_blank"
                      size="small"
                      label="Ver código"
                    />
                  )}
                  <StyledLinkButton
                    href={appUrl}
                    target="_blank"
                    size="small"
                    label="Ver projeto"
                  />
                </ButtonsContainer>
              </SliderImageDescription>
            </SliderImageContainer>
          ))}
        </StyledSlider>
      </Zoom>
    </DefaultPage>
  )
}

export default Projects
