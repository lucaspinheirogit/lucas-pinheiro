import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import { BrasilFlag, EuaFlag } from 'assets/icons'

import { Container, Item, LanguagesContainer, LanguageFlag } from './Header.styled'

const Header = () => {
  const { i18n } = useTranslation()

  function changeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <Container>
      <Item href="#ABOUT">
        <Trans i18nKey="header.about" />
      </Item>
      <Item href="#PROJECTS">
        <Trans i18nKey="header.projects" />
      </Item>
      <Item href="#ARTICLES">
        <Trans i18nKey="header.articles" />
      </Item>
      <LanguagesContainer>
        <LanguageFlag
          src={BrasilFlag}
          selected={selectedLanguage === 'pt-BR'}
          onClick={() => changeLanguage('pt-BR')}
        />
        <LanguageFlag
          src={EuaFlag}
          selected={selectedLanguage === 'en-US'}
          onClick={() => changeLanguage('en-US')}
        />
      </LanguagesContainer>
    </Container>
  )
}

export default Header
