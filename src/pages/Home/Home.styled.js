import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { responsive } from 'utils'
import Icon from 'components/Icon'

export const Container = styled.section`
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  padding: 0.25em 1em;
  text-shadow: 0 2px 5px black;

  @media ${responsive.md} {
    font-size: 80px;
  }
`

export const MediaContainer = styled.div`
  display: flex;
  margin-top: 0.5em;
`

export const MediaIcon = styled(Icon)`
  border-radius: 50%;
  border: 1px solid white;
  margin: 0 0.35em;
  backdrop-filter: blur(5px);
  opacity: 0.65;

  &:hover {
    opacity: 1;
  }
`

export const ArrowIconContainer = styled.a`
  all: unset;
  cursor: pointer;
`

const upAndDown = keyframes`
 from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-50%);
  }
`

export const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  color: white;
  transform: translateX(-50%);
  animation: ${upAndDown} 1s alternate-reverse infinite;
`
