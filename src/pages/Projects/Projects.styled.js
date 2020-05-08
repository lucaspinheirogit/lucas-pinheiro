import Slider from 'react-slick'
import styled, { css } from 'styled-components'

import { responsive, ifStyle } from 'utils'

const isMobile = ifStyle('mobile')

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
  width: 97.5% !important;
  margin: 0 auto;
  display: flex !important;
  border-radius: 1em;
  border: 1px solid white;
  overflow: hidden;
  position: relative;
  outline: 0;
  max-height: 85vh;

  @media ${responsive.sm} {
    width: 95% !important;
    max-height: auto;
  }
`

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
  display: none !important;

  @media ${responsive.sm} {
    display: block !important;
  }

  ${isMobile(css`
    display: block !important;

    @media ${responsive.sm} {
      display: none !important;
    }
  `)}
`

export const SliderImageDescription = styled.div`
  background-color: rgba(20, 28, 49, 0.85);
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1em;
  backdrop-filter: blur(5px);
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
`

export const SliderImageDescriptionText = styled.p`
  margin-bottom: 0.5em;
`
