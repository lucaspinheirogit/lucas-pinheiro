import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Linkedin, Medium, Instagram, Whatsapp } from 'assets/icons'

import { Container, Title, MediaContainer, MediaIcon, ArrowIcon } from './Home.styled'
import { LINKEDIN_URL, MEDIUM_URL, INSTAGRAM_URL, WHATSAPP_URL } from './constants'

const Home = () => (
  <Container id="HOME">
    <Title>Lucas Pinheiro</Title>
    <MediaContainer>
      <MediaIcon src={Linkedin} url={LINKEDIN_URL} />
      <MediaIcon src={Medium} url={MEDIUM_URL} />
      <MediaIcon src={Instagram} url={INSTAGRAM_URL} />
      <MediaIcon src={Whatsapp} url={WHATSAPP_URL} />
    </MediaContainer>
    <ArrowIcon icon={faChevronDown}/>
  </Container>
)

export default Home
