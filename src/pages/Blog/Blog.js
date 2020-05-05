import React, { useState } from 'react'

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

const Blog = () => {
  const [hovered, setHovered] = useState(null)

  const clearHovered = () => setHovered(null)

  return (
    <Container id="BLOG">
      <InnerContainer>
        <Title>Blog</Title>
        <ArticlesContainer>
          {ARTICLES.map(({ id, text, imgSrc, url }) => {
            const isHovered = id === hovered

            return (
              <Article key={id} onMouseEnter={() => setHovered(id)} onMouseLeave={clearHovered}>
                <ArticleImage src={imgSrc} />
                <ArticleOverlay hovered={isHovered}>
                  <ArticleTitle>{text}</ArticleTitle>
                  <ArticleButton target="_blank" href={url}>
                    Ver mais
                  </ArticleButton>
                </ArticleOverlay>
              </Article>
            )
          })}
        </ArticlesContainer>
        <Text>Artigos de tecnologia que escrevo no meu tempo livre</Text>
      </InnerContainer>
    </Container>
  )
}

export default Blog
