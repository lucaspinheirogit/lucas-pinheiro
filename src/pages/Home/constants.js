import { Linkedin, Medium, Instagram, Whatsapp, GitHub } from 'assets/icons'

const LINKEDIN_URL = 'https://www.linkedin.com/in/lucas-pinheiro-oficial'
const MEDIUM_URL = 'https://medium.com/@lucas_pinheiro'
const INSTAGRAM_URL = 'https://www.instagram.com/lucasss_pinheiro'
const WHATSAPP_URL = 'https://whats.link/lucaspinheiro'
const GITHUB_URL = 'https://github.com/lucaspinheirogit'

export const MEDIA_ICONS = [
  {
    id: 'github',
    imgSrc: GitHub,
    url: GITHUB_URL
  },
  {
    id: 'linkedin',
    imgSrc: Linkedin,
    url: LINKEDIN_URL
  },
  {
    id: 'medium',
    imgSrc: Medium,
    url: MEDIUM_URL
  },
  {
    id: 'instagram',
    imgSrc: Instagram,
    url: INSTAGRAM_URL
  },
  {
    id: 'whatsapp',
    imgSrc: Whatsapp,
    url: WHATSAPP_URL
  }
]
