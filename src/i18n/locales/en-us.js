export default {
  translations: {
    header: {
      about: 'About',
      projects: 'Projects',
      articles: 'Articles'
    },
    aboutSection: {
      title: 'About',
      firstText:
        'Technology lover, always seeking to continue improving and creating products that allow me to change the world through software.',
      secondText:
        'Motivated by innovative ideas and challenges, I like to share my solved problems and help people, scroll down a bit to find my published articles.',
      thirdText:
        "In short, I'm trying to bring, through the technology world, practicality and simplicity to the many people we impact with each line of code."
    },
    projectsSection: {
      title: 'Projects',
      missionarioGaucho: {
        title: 'E-Commerce',
        description:
          'Project made to a client, including all the following technologies and tools:',
        techs: {
          frontend: 'Responsive Front-End with light/dark themes',
          backend: 'Back-End integration with eletronic payment platform',
          database: 'Database',
          cicd: 'CI / CD',
          infra: 'Infrastructure'
        }
      },
      pratoPratico: {
        title: 'Prato Prático!',
        description: 'My Capstone Project about helping people that cook on a daily basis, including all the following technologies and tools:',
        techs: {
          mobile: 'Cross-Platform App (Android / IOS)',
          backend: 'Back-End integration with Firebase Image Uploads',
          database: 'Database'
        }
      },
      snakeGame: {
        title: 'Snake Game!',
        description:
          "The famous little game from Nokia phone's, including all the following technologies and tools:",
        techs: {
          lib: 'Graphic Elements Library',
          frontend: 'Front-End',
          infra: 'Infrastructure'
        }
      },
      imageSearch: {
        title: 'Image Search app',
        description:
          'Image searching through external images database, including all the following technologies and tools:',
        techs: {
          database: 'External images database',
          frontend: 'Front-End',
          infra: 'Infrastructure'
        }
      }
    },
    articlesSection: {
      title: 'Articles',
      reactNativePerformance: "How to improve React Native App's Performance",
      communityContribuition: 'Contributing to the Community'
    },
    footer: `Copyright © ${new Date().getFullYear()} - Lucas Pinheiro. All rights reserved.`
  }
}
