import styled from 'styled-components'

import { responsive } from 'utils'

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;

  &:nth-child(even) {
    flex-direction: row-reverse;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
`

export const ContentImageContainer = styled.div`
  flex: 1;
`

export const ContentImage = styled.img`
  width: 64px;
  height: auto;

  @media ${responsive.md} {
    width: 128px;
  }
`

export const ContentText = styled.p`
  flex: 2;
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  word-break: break-word;
  text-align: justify;

  @media ${responsive.md} {
    font-size: 22px;
  }
`
