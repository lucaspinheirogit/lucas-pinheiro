import React from 'react'
import { useTranslation } from 'react-i18next'

import { BrasilFlag, EuaFlag } from 'assets/icons'

import { Container, Flag } from './I18n.styled'

const I18n = () => {
  const { i18n } = useTranslation()

  function changeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <Container>
      <Flag
        src={BrasilFlag}
        selected={selectedLanguage === 'pt-BR'}
        onClick={() => changeLanguage('pt-BR')}
      />
      <Flag
        src={EuaFlag}
        selected={selectedLanguage === 'en-US'}
        onClick={() => changeLanguage('en-US')}
      />
    </Container>
  )
}

export default I18n
