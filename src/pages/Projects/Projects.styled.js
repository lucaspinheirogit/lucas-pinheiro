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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23001440' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23001e5e'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

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
