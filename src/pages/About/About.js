import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'

import { Content, ContentImageContainer, ContentImage, ContentText } from './About.styled'
import { CONTENT } from './constants'

const About = () => (
  <DefaultPage id="ABOUT" title="Sobre">
    {CONTENT.map(({ id, img, text }) => (
      <Content key={id}>
        <ContentImageContainer>
          <Zoom>
            <ContentImage alt={text} src={img} />
          </Zoom>
        </ContentImageContainer>
        <ContentText>
          <Zoom>{text}</Zoom>
        </ContentText>
      </Content>
    ))}
  </DefaultPage>
)

export default About
