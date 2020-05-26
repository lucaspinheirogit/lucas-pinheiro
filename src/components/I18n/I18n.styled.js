import styled, { css } from 'styled-components'

import { responsive, ifStyle } from 'utils'

const isFlagSelected = ifStyle('selected')

export const Container = styled.div`
  position: fixed;
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

export const Flag = styled.img`
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
