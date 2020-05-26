import React from 'react'

import { Translator } from 'components/I18n'

import { Container, Text } from './Footer.styled'

const Footer = () => (
  <Container>
    <Text>
      <Translator path="footer" />
    </Text>
  </Container>
)

export default Footer
