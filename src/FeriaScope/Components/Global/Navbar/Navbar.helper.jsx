const pages = [
  { id: 1, name: 'Nosotros', url: '/' },
  {
    id: 2,
    name: 'Para expositores',
    url: '',
    submenus: [
      {
        id: 7,
        name: 'Para expositores',
        url: '/event/servicios-para-expositores',
      },
    ],
  },
  {
    id: 3,
    name: 'Delegaciones',
    url: '/event/delegations',
  },
  {
    id: 4,
    name: 'Público en general',
    url: '/event/general-public',
  },
  {
    id: 5,
    name: 'Contacto',
    url: '/event/contact',
  },
  {
    id: 6,
    name: 'FAQ',
    url: '/event/faq',
  },
];

const subPages = [
  {
    id: 7,
    name: 'Nosotros',
    url: '/',
  },
  {
    id: 8,
    name: 'Para expositores',
    url: '/event/servicios-para-expositores',
  },
  {
    id: 9,
    name: 'Emprendedores Nac  ',
    url: '/event/emprendedores-nac',
  },
  {
    id: 10,
    name: 'Delegaciones',
    url: '/event/delegations',
  },
  {
    id: 11,
    name: 'Público en general',
    url: '/event/general-public',
  },
  {
    id: 12,
    name: 'Contacto',
    url: '/event/contact',
  },
  {
    id: 13,
    name: 'FAQ',
    url: '/event/faq',
  },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export { pages, settings, subPages };
