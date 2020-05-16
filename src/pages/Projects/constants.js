import {
  MissionarioGaucho,
  MissionarioGauchoMobile,
  SnakeGame,
  SnakeGameMobile
} from 'assets/images'

export const PROJECTS = [
  {
    id: 1,
    img: MissionarioGaucho,
    mobileImg: MissionarioGauchoMobile,
    description: 'Projeto de um E-Commerce feito com React, Node, Aws, Heroku, MySql...',
    codeUrl: null,
    appUrl: 'https://missionariogaucho.com.br/'
  },
  {
    id: 2,
    img: SnakeGame,
    mobileImg: SnakeGameMobile,
    description: 'O famoso Jogo da Cobrinha feito usando a biblioteca p5.js',
    codeUrl: 'https://github.com/lucaspinheirogit/snake-game',
    appUrl: 'https://snake-game-lucas-pinheiro.now.sh'
  }
]
