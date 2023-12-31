import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  send,
  shield,
  star,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Accueil',
  },
  {
    id: 'features',
    title: 'Fonctionnalités',
  },
  {
    id: 'product',
    title: 'Produit',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Récompenses',
    content:
      'Les meilleures cartes de crédit offrent des combinaisons alléchantes de promotions et de prix.',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% sécurisé',
    content:
      'Nous prenons des mesures préventives pour garantir la sécurité de vos informations et de vos transactions.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Transfert de solde',
    content: `Une carte de crédit à transfert de solde peut vous faire économiser beaucoup d'argent en frais d'intérêt.`,
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content: `L'argent n'est qu'un outil. Il vous emmènera où vous voulez, mais il ne vous remplacera pas en tant que conducteur.`,
    name: 'Herman Jensen',
    title: 'Airbnb',
    img: people01,
  },
  {
    id: 'feedback-2',
    content: `L'argent vous facilite la vie. Si vous avez la chance d'en avoir, vous êtes chanceux.`,
    name: 'Steve Mark',
    title: 'Coinbase',
    img: people02,
  },
  {
    id: 'feedback-3',
    content: `Ce sont généralement les personnes qui travaillent dans les secteurs de l'argent, de la finance et du commerce international qui sont les plus riches.`,
    name: 'Kenn Gallagher',
    title: 'Binance',
    img: people03,
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'Clients',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Entreprises',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transactions',
    value: '€ 230M+',
  },
];

export const footerLinks = [
  {
    title: 'Liens utiles',
    links: [
      {
        name: 'Contenu',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'Comment ça marche',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Création',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explorer',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Conditions et services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Communauté',
    links: [
      {
        name: `Centre d'aide`,
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partenaires',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partenaires',
    links: [
      {
        name: 'Notre partenaire',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Devenir partenaire',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'instagram',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'facebook',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'twitter',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];

export const clients = [
  {
    id: 'airbnb',
    logo: airbnb,
  },
  {
    id: 'binance',
    logo: binance,
  },
  {
    id: 'coinbase',
    logo: coinbase,
  },
];
