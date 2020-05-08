import { Linkedin, Medium, GitHub, Email, Cv } from 'assets/icons'

const LINKEDIN_URL = 'https://www.linkedin.com/in/lucas-pinheiro-oficial'
const MEDIUM_URL = 'https://medium.com/@lucas_pinheiro'
const GITHUB_URL = 'https://github.com/lucaspinheirogit'
const EMAIL_URL = 'mailto: lucaspinheiroifsul@gmail.com'
const CV_URL = 'https://drive.google.com/file/d/1pDwydmgkWClQ9tBujnYe1hcyXg8ADpee/view?usp=sharing'

export const MEDIA_ICONS = [
  {
    id: 'github',
    icon: GitHub,
    url: GITHUB_URL,
    placeholder: 'github.com/lucaspinheirogit'
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    url: LINKEDIN_URL,
    placeholder: 'linkedin.com/in/lucas-pinheiro-oficial'
  },
  {
    id: 'medium',
    icon: Medium,
    url: MEDIUM_URL,
    placeholder: 'medium.com/@lucas_pinheiro'
  },
  {
    id: 'email',
    icon: Email,
    url: EMAIL_URL,
    placeholder: 'lucaspinheiroifsul@gmail.com'
  },
  {
    id: 'cv',
    icon: Cv,
    url: CV_URL,
    placeholder: 'Curriculum Vitae'
  }
]
