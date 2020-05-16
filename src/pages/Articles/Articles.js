import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'

import {
  ArticlesContainer,
  Article,
  ArticleOverlay,
  ArticleImage,
  ArticleTitle,
  ArticleButton
} from './Articles.styled'
import { ARTICLES } from './constants'

const Articles = () => (
  <DefaultPage id="ARTICLES" title="Artigos">
    <Zoom>
      <ArticlesContainer>
        {ARTICLES.map(({ id, text, imgSrc, url }) => (
          <Article key={id}>
            <ArticleImage alt={text} src={imgSrc} />
            <ArticleOverlay>
              <ArticleTitle>{text}</ArticleTitle>
              <ArticleButton target="_blank" href={url} rel="noopener noreferrer">
                Ver mais
              </ArticleButton>
            </ArticleOverlay>
          </Article>
        ))}
      </ArticlesContainer>
    </Zoom>
  </DefaultPage>
)

export default Articles
