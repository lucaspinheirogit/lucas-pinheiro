import Slider from 'react-slick'
import styled from 'styled-components'

import { PrimaryLinkButton } from 'components/Buttons'

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
`

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
`

export const SliderImageDescription = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #000f30, #0d265c 30%, #0d265c 60%, #000f30 100%);
  text-align: center;
  padding: 1em;
`

export const SliderImageDescriptionText = styled.p`
  margin-bottom: 0.5em;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledLinkButton = styled(PrimaryLinkButton)`
  margin: 0.5em;
`
