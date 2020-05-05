import styled, { css } from 'styled-components'

import { switchStyle } from 'utils'
const switchButtonSize = switchStyle('size')

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #7510f7;
  background: transparent;
  color: white;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  font-family: 'Manrope', sans-serif;
  outline: 0;

  &:hover {
    background: #7510f7;
  }

  ${switchButtonSize({
    small: css`
      font-size: 14px;
      height: 36px;
    `,
    medium: css`
      font-size: 16px;
      height: 40px;
    `,
    large: css`
      font-size: 18px;
      height: 50px;
    `
  })};
`
