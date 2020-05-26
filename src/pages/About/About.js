import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'
import { Translator } from 'components/I18n'

import { Content, ContentImageContainer, ContentImage, ContentText } from './About.styled'
import { CONTENT } from './constants'

const About = () => (
  <DefaultPage id="ABOUT" title={<Translator path={'aboutSection.title'} />}>
    {CONTENT.map(({ id, img, imgAlt, textPath }) => (
      <Content key={id}>
        <ContentImageContainer>
          <Zoom>
            <ContentImage alt={imgAlt} src={img} />
          </Zoom>
        </ContentImageContainer>
        <ContentText>
          <Zoom>
            <Translator path={textPath} />
          </Zoom>
        </ContentText>
      </Content>
    ))}
  </DefaultPage>
)

export default About
