export const personalInfo = {
  name: 'Eliahou Benamou',
  age: 23,
  title: 'Data IA Business - En recherche d\'alternance',
  email: 'eliahoubenamous@gmail.com',
  phone: '+33 7 82 50 65 29',
  location: 'Paris, France',
  github: 'https://github.com/eliahou55',
  linkedin: 'https://linkedin.com/in/eliahou-benamou',
  alternance: '4 jours / 1 jours'
};

export const skills = [
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'SQL', level: 85, category: 'Database' },
  { name: 'Data Pipeline', level: 80, category: 'Data Engineering' },
  { name: 'APIs REST', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'NoSQL', level: 75, category: 'Database' },
  { name: 'Data Visualization', level: 85, category: 'Analytics' },
  { name: 'Machine Learning', level: 70, category: 'AI' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'DevOps' },
];

export const experiences = [
  {
    id: 1,
    title: 'Data Management and Automation',
    company: 'Bobochic Paris',
    location: 'Paris',
    period: '10/2025 - Aujourd\'hui',
    type: 'Apprenticeship',
    description: [
      'Conception de requetes SQL avancees pour analyser commandes, transporteurs et performances produits',
      'Creation de dashboards operationnels pour suivre les KPI logistiques et financiers',
      'Automatisation de l\'extraction et traitement des rapports PDF via API avec integration directe dans un SaaS',
      'Optimisation du pipeline data, nettoyage des donnees et documentation des regles metier'
    ],
    technologies: ['SQL', 'Python', 'API', 'Dashboard', 'Data Pipeline']
  },
  {
    id: 2,
    title: 'Data Analyst and Reporting',
    company: 'Bamana Solution',
    location: 'Paris',
    period: '09/2023 - 09/2024',
    type: 'Apprenticeship',
    description: [
      'Analyse de donnees issues de capteurs IoT pour optimiser itineraires et usure des flottes',
      'Realisation de rapports statistiques automatises et creation de dashboards decisionnels',
      'Exploration de correlations metier et experimentations de modeles predictifs (clustering, regression lineaire)'
    ],
    technologies: ['IoT', 'Python', 'Statistics', 'ML', 'Dashboards']
  },
  {
    id: 3,
    title: 'Back-End & Data Developer',
    company: 'Digicab',
    location: 'Paris',
    period: '09/2022 - 09/2023',
    type: 'Apprenticeship',
    description: [
      'Developpement d\'API REST securisees pour l\'application de suivi patient',
      'Gestion et exploitation de bases de donnees PostgreSQL pour besoins operationnels et analytiques',
      'Automatisation des extractions de donnees pour les equipes metier',
      'Collaboration avec l\'equipe produit pour traduire besoins fonctionnels en solutions techniques'
    ],
    technologies: ['API REST', 'PostgreSQL', 'Python', 'Backend']
  }
];

export const education = [
  {
    id: 1,
    degree: 'Master M1 (Bac+4)',
    field: 'Data/IA and Business',
    school: 'Paris School of Technology and Business',
    location: 'Paris',
    period: '09/2025 - Aujourd\'hui',
    status: 'En cours'
  },
  {
    id: 2,
    degree: 'Bachelor (Bac+3)',
    field: 'Data and Artificial Intelligence',
    school: 'Paris School of Technology and Business',
    location: 'Paris',
    period: '09/2024 - 06/2025',
    status: 'Obtenu'
  },
  {
    id: 3,
    degree: 'BTS SIO Option SLAM (Bac+2)',
    field: 'Services informatiques aux organisations',
    school: 'ORT De Montreuil',
    location: 'Paris',
    period: '09/2022 - 07/2024',
    status: 'Obtenu'
  }
];

export const languages = [
  { name: 'Francais', level: 'Langue maternelle', proficiency: 100 },
  { name: 'Anglais', level: 'Niveau B2', proficiency: 75 }
];
