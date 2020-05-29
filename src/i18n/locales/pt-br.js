export default {
  translations: {
    header: {
      about: 'Sobre',
      projects: 'Projetos',
      articles: 'Artigos'
    },
    aboutSection: {
      title: 'Sobre',
      firstText:
        'Apaixonado por tecnologia, sempre buscando me aprofundar mais no desenvolvimento e criação de produtos que me fazem transformar o mundo através de software.',
      secondText:
        'Motivado por idéias inovadoras e desafios, gosto de divulgar os problemas que superei e ajudar mais pessoas, desça um pouco mais e conheça meus artigos.',
      thirdText:
        'Enfim, inspirado pelo mundo da tecnologia a cada vez mais trazer praticidade e simplicidade para as muitas pessoas que impactamos com cada linha de código.'
    },
    projectsSection: {
      title: 'Projetos',
      missionarioGaucho: {
        title: 'E-Commerce',
        description:
          'Projeto feito para um cliente, envolvendo todas as seguintes áreas e tecnologias:',
        techs: {
          frontend: 'Front-End responsivo com temas light/dark',
          backend: 'Back-End integrado com meio de pagamento',
          database: 'Banco de dados',
          cicd: 'CI / CD',
          infra: 'Infraestrutura'
        }
      },
      pratoPratico: {
        title: 'Prato Prático!',
        description:
          'Meu Trabalho de Conclusão de Curso (TCC) sobre facilitar a vida de quem cozinha todo dia, envolvendo todas as seguintes áreas e tecnologias:',
        techs: {
          mobile: 'Mobile multiplataforma (Android / IOS)',
          backend: 'Back-End com upload de imagens para o Firebase',
          database: 'Banco de dados'
        }
      },
      snakeGame: {
        title: 'Jogo da Cobrinha!',
        description:
          'O famoso Joguinho dos celulares Nokia, desenvolvido com as seguintes tecnologias:',
        techs: {
          lib: 'Biblioteca para criação de elementos gráficos',
          frontend: 'Front-End',
          infra: 'Infraestrutura'
        }
      },
      imageSearch: {
        title: 'Pesquisador de imagens!',
        description:
          'Pesquisa de imagens atráves de consultas em um banco de fotos externo, desenvolvido com as seguintes tecnologias:',
        techs: {
          database: 'Banco de imagens externo',
          frontend: 'Front-End',
          infra: 'Infraestrutura'
        }
      }
    },
    articlesSection: {
      title: 'Artigos',
      reactNativePerformance: 'Como melhorar a performance no React Native',
      communityContribuition: 'Contribuindo para a comunidade'
    },
    footer: `Copyright © ${new Date().getFullYear()} - Lucas Pinheiro. Todos os direitos reservados.`
  }
}
