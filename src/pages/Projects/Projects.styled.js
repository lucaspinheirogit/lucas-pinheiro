import Slider from 'react-slick'
import styled from 'styled-components'

import { PrimaryLinkButton } from 'components/Buttons'
import { responsive } from 'utils'

export const StyledSlider = styled(Slider)`
  padding: 1em 0;

  li button:before {
    color: #ccc;
    font-size: 10px;
  }
  li.slick-active button:before {
    color: white;
    font-size: 10px;
  }
`

export const SliderImageContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  outline: 0;
  padding: 0 0.5em;
  padding-top: 0.5em;
`

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
`

export const SliderImageDescription = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #000f30, #0d265c 20%, #0d265c 80%, #000f30 100%);
  text-align: center;
  padding: 1em 0;

  @media ${responsive.md} {
    background-image: linear-gradient(to right, #000f30, #0d265c 30%, #0d265c 60%, #000f30 100%);
    padding: 1em;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledLinkButton = styled(PrimaryLinkButton)`
  margin: 0.5em;
`

export const Title = styled.h2`
  margin-bottom: 0.25em;
`

export const Description = styled.p`
  margin-bottom: 1em;
`

export const TechsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 1em;

  @media ${responsive.md} {
    width: 80%;
  }
`

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
  border-bottom: 1px solid #000f3099;

  @media ${responsive.md} {
    /* flex-direction: row; */
  }
`

export const TechDescription = styled.p`
  font-weight: bold;
`

export const TechStack = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #ccc;
`
