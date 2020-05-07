import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactTooltip from 'react-tooltip'

import {
  Container,
  Title,
  MediaContainer,
  MediaIcon,
  ArrowIconContainer,
  ArrowIcon
} from './Home.styled'
import { MEDIA_ICONS } from './constants'

const Home = () => (
  <Container id="HOME">
    <Title>Lucas Pinheiro</Title>
    <MediaContainer>
      {MEDIA_ICONS.map(({ id, imgSrc, url }) => (
        <>
          <ReactTooltip id={id} place="bottom" type="light" effect="solid">
            {url}
          </ReactTooltip>
          <MediaIcon data-tip data-for={id} src={imgSrc} url={url} />
        </>
      ))}
    </MediaContainer>
    <ArrowIconContainer href="#ABOUT">
      <ArrowIcon icon={faChevronDown} />
    </ArrowIconContainer>
  </Container>
)

export default Home
