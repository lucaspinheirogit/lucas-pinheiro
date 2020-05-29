import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'
import { Translator } from 'components/I18n'
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
    <DefaultPage id="PROJECTS" title={<Translator path="projectsSection.title" />}>
      <Zoom>
        <StyledSlider {...defaultSliderSettings}>
          {PROJECTS.map(({ key, img, mobileImg, techs, codeUrl, appUrl }) => {
            const basePath = `projectsSection.${key}`
            const techsPath = `${basePath}.techs`

            const title = <Translator path={`${basePath}.title`} />
            const description = <Translator path={`${basePath}.description`} />

            return (
              <SliderImageContainer key={key}>
                <SliderImage alt={description} src={isMobile ? mobileImg : img} />
                <SliderImageDescription>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                  <TechsContainer>
                    {techs.map(({ key, stack }) => {
                      const techDescription = <Translator path={`${techsPath}.${key}`} />
                      const techStack = stack.join(', ')

                      return (
                        <Tech key={`${key}-{techDescription}`}>
                          <TechDescription>{techDescription}</TechDescription>
                          <TechStack>({techStack})</TechStack>
                        </Tech>
                      )
                    })}
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
                    {appUrl && (
                      <StyledLinkButton
                        href={appUrl}
                        target="_blank"
                        size="small"
                        label="Ver Projeto"
                        rel="noopener noreferrer"
                      />
                    )}
                  </ButtonsContainer>
                </SliderImageDescription>
              </SliderImageContainer>
            )
          })}
        </StyledSlider>
      </Zoom>
    </DefaultPage>
  )
}

export default Projects
