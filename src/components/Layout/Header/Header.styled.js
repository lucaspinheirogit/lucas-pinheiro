import styled, { css } from 'styled-components'

import { responsive, ifStyle } from 'utils'

const isFlagSelected = ifStyle('selected')

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

export const LanguagesContainer = styled.div`
  position: absolute;
  padding: 0.15em;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  @media ${responsive.md} {
    flex-direction: row;
    padding: 0.35em;
  }
`

export const LanguageFlag = styled.img`
  width: 1.75em;
  height: 1.75em;
  margin: 0.25em;
  filter: grayscale(1);
  transition: 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    filter: grayscale(0.5);
  }

  ${isFlagSelected(css`
    filter: grayscale(0);

    &:hover {
      filter: grayscale(0);
    }
  `)};

  @media ${responsive.md} {
    width: 2.5em;
    height: 2.5em;
    margin: 0.25em;
  }
`
