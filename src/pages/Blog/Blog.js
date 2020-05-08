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
} from './Blog.styled'
import { ARTICLES } from './constants'

const Blog = () => (
  <Container id="ARTICLES">
    <InnerContainer>
      <Title>Blog</Title>
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
      <Text>Artigos de tecnologia que escrevo no meu tempo livre</Text>
    </InnerContainer>
  </Container>
)

export default Blog
