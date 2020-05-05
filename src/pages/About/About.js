import React from 'react'
import { CONTENT } from './constants'

import {
  Container,
  InnerContainer,
  Title,
  ContentContainer,
  Content,
  ContentImageContainer,
  ContentImage,
  ContentText
} from './About.styled'

const About = () => (
  <Container id="ABOUT">
    <InnerContainer>
      <Title>Sobre</Title>
      <ContentContainer>
        {CONTENT.map(({ id, img, text }) => (
          <Content key={id}>
            <ContentImageContainer>
              <ContentImage src={img} />
            </ContentImageContainer>
            <ContentText>{text}</ContentText>
          </Content>
        ))}
      </ContentContainer>
    </InnerContainer>
  </Container>
)

export default About
