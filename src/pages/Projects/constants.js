import {
  MissionarioGaucho,
  MissionarioGauchoMobile,
  SnakeGame,
  SnakeGameMobile,
  ImageSearch,
  ImageSearchMobile,
  PratoPratico,
  PratoPraticoMobile
} from 'assets/images'

export const PROJECTS = [
  {
    key: 'missionarioGaucho',
    img: MissionarioGaucho,
    mobileImg: MissionarioGauchoMobile,
    techs: [
      {
        key: 'frontend',
        stack: ['React', 'Redux', 'Styled-components', 'Formik', 'Yup', 'Axios']
      },
      {
        key: 'backend',
        stack: ['Node', 'Express', 'Sequelize', 'Passport', 'JWT', 'AWS-SDK']
      },
      {
        key: 'database',
        stack: ['MySQL', 'AWS RDS']
      },
      {
        key: 'cicd',
        stack: ['GitHub Actions', 'Heroku']
      },
      {
        key: 'infra',
        stack: ['AWS S3', 'CloudFront', 'Route53', 'RDS', 'Heroku']
      }
    ],
    codeUrl: null,
    appUrl: 'https://missionariogaucho.com.br/'
  },
  {
    key: 'pratoPratico',
    img: PratoPratico,
    mobileImg: PratoPraticoMobile,
    techs: [
      {
        key: 'mobile',
        stack: [
          'React Native',
          'Redux',
          'React-Navigation',
          'Image Picker',
          'Styled-Components',
          'Formik',
          'Yup'
        ]
      },
      {
        key: 'backend',
        stack: ['Node', 'Express', 'Knex', 'JWT', 'Firebase', 'Multer']
      },
      {
        key: 'database',
        stack: ['MySQL', 'Firestore']
      }
    ],
    codeUrl: 'https://github.com/lucaspinheirogit/PratoPratico',
    appUrl: null
  },
  {
    key: 'snakeGame',
    img: SnakeGame,
    mobileImg: SnakeGameMobile,
    techs: [
      {
        key: 'lib',
        stack: ['P5.js']
      },
      {
        key: 'frontend',
        stack: ['HTML', 'CSS', 'JavaScript']
      },
      {
        key: 'infra',
        stack: ['Zeit NOW']
      }
    ],
    codeUrl: 'https://github.com/lucaspinheirogit/snake-game',
    appUrl: 'https://snake-game-lucas-pinheiro.now.sh'
  },
  {
    key: 'imageSearch',
    img: ImageSearch,
    mobileImg: ImageSearchMobile,
    techs: [
      {
        key: 'database',
        stack: ['Shutterstock']
      },
      {
        key: 'frontend',
        stack: ['HTML', 'CSS', 'JavaScript']
      },
      {
        key: 'infra',
        stack: ['Zeit NOW']
      }
    ],
    codeUrl: 'https://github.com/lucaspinheirogit/ImageSearchApp',
    appUrl: 'https://image-search-lucas-pinheiro.now.sh/'
  }
]
