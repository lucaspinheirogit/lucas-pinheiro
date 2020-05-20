import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'
import { useWindowDimensions } from 'hooks'

import {
  StyledSlider,
  SliderImageContainer,
  SliderImage,
  SliderImageDescription,
  ButtonsContainer,
  StyledLinkButton,
  Title,
  Description,
  TechsContainer,
  Tech,
  TechDescription,
  TechStack
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
          {PROJECTS.map(({ id, img, mobileImg, title, description, techs, codeUrl, appUrl }) => (
            <SliderImageContainer key={id}>
              <SliderImage alt={description} src={isMobile ? mobileImg : img} />
              <SliderImageDescription>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <TechsContainer>
                  {techs.map(tech => (
                    <Tech key={tech.description}>
                      <TechDescription>{tech.description}</TechDescription>
                      <TechStack>({tech.stack.join(', ')})</TechStack>
                    </Tech>
                  ))}
                </TechsContainer>
                <ButtonsContainer>
                  {codeUrl && (
                    <StyledLinkButton
                      href={codeUrl}
                      target="_blank"
                      size="small"
                      label="Ver Código"
                      rel="noopener noreferrer"
                    />
                  )}
                  <StyledLinkButton
                    href={appUrl}
                    target="_blank"
                    size="small"
                    label="Ver Projeto"
                    rel="noopener noreferrer"
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
