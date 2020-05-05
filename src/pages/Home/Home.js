import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Linkedin, Medium, Instagram, Whatsapp, GitHub } from 'assets/icons'

import { Container, Title, MediaContainer, MediaIcon, ArrowIconContainer, ArrowIcon } from './Home.styled'
import { LINKEDIN_URL, MEDIUM_URL, INSTAGRAM_URL, WHATSAPP_URL, GITHUB_URL } from './constants'

const Home = () => (
  <Container id="HOME">
    <Title>Lucas Pinheiro</Title>
    <MediaContainer>
      <MediaIcon src={GitHub} url={GITHUB_URL} />
      <MediaIcon src={Linkedin} url={LINKEDIN_URL} />
      <MediaIcon src={Medium} url={MEDIUM_URL} />
      <MediaIcon src={Instagram} url={INSTAGRAM_URL} />
      <MediaIcon src={Whatsapp} url={WHATSAPP_URL} />
    </MediaContainer>
    <ArrowIconContainer href="#ABOUT">
      <ArrowIcon icon={faChevronDown} />
    </ArrowIconContainer>
  </Container>
)

export default Home
