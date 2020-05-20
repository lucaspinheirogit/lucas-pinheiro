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
    id: 1,
    img: MissionarioGaucho,
    mobileImg: MissionarioGauchoMobile,
    title: 'E-Commerce!',
    description:
      'Projeto feito para um cliente, envolvendo todas as seguintes áreas e tecnologias:',
    techs: [
      {
        description: 'Front-End responsivo com temas light/dark',
        stack: ['React', 'Redux', 'Styled-components', 'Formik', 'Yup', 'Axios']
      },
      {
        description: 'Back-End integrado com meio de pagamento',
        stack: ['Node', 'Express', 'Sequelize', 'Passport', 'JWT', 'AWS-SDK']
      },
      {
        description: 'Banco de dados',
        stack: ['MySQL', 'AWS RDS']
      },
      {
        description: 'CI / CD',
        stack: ['GitHub Actions', 'Heroku']
      },
      {
        description: 'Infraestrutura',
        stack: ['AWS S3', 'CloudFront', 'Route53', 'RDS', 'Heroku']
      }
    ],
    codeUrl: null,
    appUrl: 'https://missionariogaucho.com.br/'
  },
  {
    id: 2,
    img: PratoPratico,
    mobileImg: PratoPraticoMobile,
    title: 'Prato Prático!',
    description:
      'Meu Trabalho de Conclusão de Curso (TCC), envolvendo todas as seguintes áreas e tecnologias:',
    techs: [
      {
        description: 'Mobile multiplataforma (Android / IOS)',
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
        description: 'Back-End com upload de imagens para o Firebase',
        stack: ['Node', 'Express', 'Knex', 'JWT', 'Firebase', 'Multer']
      },
      {
        description: 'Banco de dados',
        stack: ['MySQL', 'Firestore']
      }
    ],
    codeUrl: 'https://github.com/lucaspinheirogit/PratoPratico',
    appUrl: null
  },
  {
    id: 3,
    img: SnakeGame,
    mobileImg: SnakeGameMobile,
    title: 'Jogo da Cobrinha!',
    description:
      'O famoso Joguinho dos celulares Nokia, desenvolvido com as seguintes tecnologias:',
    techs: [
      {
        description: 'Biblioteca para criação de elementos gráficos',
        stack: ['P5.js']
      },
      {
        description: 'Front-End',
        stack: ['HTML', 'CSS', 'JavaScript']
      },
      {
        description: 'Infraestrutura',
        stack: ['Zeit NOW']
      }
    ],
    codeUrl: 'https://github.com/lucaspinheirogit/snake-game',
    appUrl: 'https://snake-game-lucas-pinheiro.now.sh'
  },
  {
    id: 4,
    img: ImageSearch,
    mobileImg: ImageSearchMobile,
    title: 'Pesquisador de imagens!',
    description:
      'Pesquisa de imagens atráves de consultas em um banco de fotos externo, desenvolvido com as seguintes tecnologias:',
    techs: [
      {
        description: 'Banco de imagens externo',
        stack: ['Shutterstock']
      },
      {
        description: 'Front-End',
        stack: ['HTML', 'CSS', 'JavaScript']
      },
      {
        description: 'Infraestrutura',
        stack: ['Zeit NOW']
      }
    ],
    codeUrl: 'https://github.com/lucaspinheirogit/ImageSearchApp',
    appUrl: 'https://image-search-lucas-pinheiro.now.sh/'
  }
]
