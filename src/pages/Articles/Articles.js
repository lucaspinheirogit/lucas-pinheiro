import React from 'react'

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
    <ArticlesContainer>
      {ARTICLES.map(({ id, text, imgSrc, url }) => (
        <Article key={id}>
          <ArticleImage src={imgSrc} />
          <ArticleOverlay>
            <ArticleTitle>{text}</ArticleTitle>
            <ArticleButton target="_blank" href={url}>
              Ver mais
            </ArticleButton>
          </ArticleOverlay>
        </Article>
      ))}
    </ArticlesContainer>
  </DefaultPage>
)

export default Articles
