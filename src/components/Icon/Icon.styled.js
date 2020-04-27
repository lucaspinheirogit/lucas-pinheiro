import styled from 'styled-components'

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.75em;

  &:hover {
    text-decoration: none;
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

export const Text = styled.p`
  color: white;

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
`
