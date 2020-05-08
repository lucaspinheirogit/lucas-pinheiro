import React from 'react'

import { Container, InnerContainer, Title, ContentContainer } from './DefaultPage.styled'

const DefaultPage = ({ id, title, children }) => (
  <Container id={id}>
    <InnerContainer>
      <Title>{title}</Title>
      <ContentContainer>{children}</ContentContainer>
    </InnerContainer>
  </Container>
)

export default DefaultPage
