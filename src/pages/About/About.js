import React from 'react'
import { CONTENT } from './constants'

import DefaultPage from 'components/DefaultPage'

import {
  Content,
  ContentImageContainer,
  ContentImage,
  ContentText
} from './About.styled'

const About = () => (
  <DefaultPage id="ABOUT" title="Sobre">
    {CONTENT.map(({ id, img, text }) => (
      <Content key={id}>
        <ContentImageContainer>
          <ContentImage src={img} />
        </ContentImageContainer>
        <ContentText>{text}</ContentText>
      </Content>
    ))}
  </DefaultPage>
)

export default About
