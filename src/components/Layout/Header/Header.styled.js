import styled from 'styled-components'

import { responsive } from 'utils'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Minimal;
`

export const Item = styled.a`
  all: unset;
  color: white;
  font-size: 26px;
  margin: 0.5em 0.5em;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    border-bottom: 1px solid white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }

  @media ${responsive.md} {
    font-size: 32px;
    margin: 0.25em 1em;
  }
`
