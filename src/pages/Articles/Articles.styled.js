import styled from 'styled-components'

import { responsive } from 'utils'

export const ArticlesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: repeat(auto-fit, 200px);
  grid-gap: 1em;
  padding: 1em 0;
  margin: auto 0;

  @media ${responsive.md} {
    grid-template-columns: repeat(auto-fit, 350px);
    grid-template-rows: repeat(auto-fit, 250px);
  }
`

export const Article = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1em;

  &:hover {
    img {
      transform: scale(1.5);
    }
  }
`

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
`

export const ArticleOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #141c31;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.65s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const ArticleTitle = styled.h2`
  color: white;
  font-size: 14px;
  margin-bottom: 0.5em;

  @media ${responsive.md} {
    font-size: 16px;
  }
`

export const ArticleButton = styled.a`
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
  font-size: 18px;

  &:hover {
    background: #7510f7;
  }
`
