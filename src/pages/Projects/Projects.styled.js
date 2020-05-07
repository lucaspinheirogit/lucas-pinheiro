import Slider from 'react-slick'
import styled, { css } from 'styled-components'

import { responsive, ifStyle } from 'utils'

const isMobile = ifStyle('mobile')

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: white;
  position: relative;
  background-color: #000f30;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%2328395e' fill-opacity='0.18'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  @media ${responsive.sm} {
    min-height: 85vh;
  }
`

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 1em;

  @media ${responsive.sm} {
    padding: 2em 1em;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: auto;
  font-family: Minimal;

  @media ${responsive.md} {
    font-size: 40px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #000f30;
  margin-bottom: auto;
`

export const StyledSlider = styled(Slider)`
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
