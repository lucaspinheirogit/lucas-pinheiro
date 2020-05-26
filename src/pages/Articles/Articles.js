import React from 'react'
import Zoom from 'react-reveal/Zoom'

import DefaultPage from 'components/DefaultPage'
import { Translator } from 'components/I18n'

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
  <DefaultPage id="ARTICLES" title={<Translator path="articlesSection.title" />}>
    <Zoom>
      <ArticlesContainer>
        {ARTICLES.map(({ key, imgSrc, url }) => (
          <Article key={key}>
            <ArticleImage alt={key} src={imgSrc} />
            <ArticleOverlay>
              <ArticleTitle>
                <Translator path={`articlesSection.${key}`} />
              </ArticleTitle>
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
