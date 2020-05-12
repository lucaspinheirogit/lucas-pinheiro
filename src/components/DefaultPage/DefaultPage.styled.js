import styled from 'styled-components'

import { responsive } from 'utils'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  color: white;
  position: relative;
  background-color: #000f30;
`

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2em 1em;
`

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: auto;
  font-family: Minimal;
  background-image: linear-gradient(to right, #000f30, #0d265c 50%, #000f30 100%);
  background-size: 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;

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
