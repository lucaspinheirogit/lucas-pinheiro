import React from 'react'

import {
  Container,
  InnerContainer,
  Title,
  Text,
  ArticlesContainer,
  Article,
  ArticleOverlay,
  ArticleImage,
  ArticleTitle,
  ArticleButton
} from './Articles.styled'
import { ARTICLES } from './constants'

const Articles = () => (
  <Container id="ARTICLES">
    <InnerContainer>
      <Title>Artigos</Title>
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
    </InnerContainer>
  </Container>
)

export default Articles
