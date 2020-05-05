import styled from 'styled-components'

import { responsive } from 'utils'

export const Container = styled.footer`
  text-align: center;
  padding: 0.5em;
`

export const Text = styled.p`
  font-size: 10px;
  color: white;

  @media ${responsive.md} {
    font-size: 14px;
  }
`
