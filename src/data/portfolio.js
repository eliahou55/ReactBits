// Données du portfolio
export const personalInfo = {
  name: "Eliahou Benamou",
  title: "Data Analyst en alternance",
  alternance: "3 jours / 2 jours",
  email: "eliahoubenamous@gmail.com",
  phone: "+33 7 82 50 65 29",
  location: "Paris, France",
  github: "https://github.com/votreprofil",
  linkedin: "https://www.linkedin.com/in/votreprofil"
};

// Expériences professionnelles
export const experiences = [
  {
    id: 1,
    title: "Data Management and Automation",
    company: "Bobochic Paris",
    type: "Apprenticeship",
    period: "10/2025 - 01/2026",
    duration: "3 mois",
    location: "Paris",
    description: [
      "Conception de requêtes SQL avancées pour analyser commandes, transporteurs et performances produits",
      "Création de dashboards opérationnels pour suivre les KPI logistiques et financiers",
      "Automatisation de l'extraction et traitement des rapports PDF via API avec intégration directe dans un SaaS",
      "Optimisation du pipeline data, nettoyage des données et documentation des règles métier"
    ],
    technologies: ["SQL", "Python", "Power BI", "API", "ETL", "Excel"]
  },
  {
    id: 2,
    title: "Data Analyst and Reporting",
    company: "Bamana Solution",
    type: "Apprenticeship",
    period: "09/2023 - 09/2024",
    duration: "1 an",
    location: "Paris",
    description: [
      "Analyse de données issues de capteurs IoT pour optimiser itinéraires et usure des flottes",
      "Réalisation de rapports statistiques automatisés et création de dashboards décisionnels",
      "Exploration de corrélations métier et expérimentations de modèles prédictifs (clustering, régression linéaire)"
    ],
    technologies: ["Python", "SQL", "IoT", "Tableau", "Statistiques", "Machine Learning"]
  },
  {
    id: 3,
    title: "Back-End & Data Developer",
    company: "Digicab",
    type: "Apprenticeship",
    period: "09/2022 - 09/2023",
    duration: "1 an",
    location: "Paris",
    description: [
      "Développement d'API REST sécurisées pour l'application de suivi patient",
      "Gestion et exploitation de bases de données PostgreSQL pour besoins opérationnels et analytiques",
      "Automatisation des extractions de données pour les équipes métier",
      "Collaboration avec l'équipe produit pour traduire besoins fonctionnels en solutions techniques"
    ],
    technologies: ["PostgreSQL", "API REST", "Python", "SQL", "Back-End"]
  }
];

// Compétences techniques
export const skills = [
  // Programming
  { name: "Python", level: 90, category: "Programming" },
  { name: "SQL", level: 85, category: "Programming" },
  { name: "R", level: 70, category: "Programming" },
  { name: "JavaScript", level: 65, category: "Programming" },

  // Database
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "BigQuery", level: 75, category: "Database" },

  // Data Engineering
  { name: "Apache Spark", level: 75, category: "Data Engineering" },
  { name: "Airflow", level: 70, category: "Data Engineering" },
  { name: "ETL/ELT", level: 80, category: "Data Engineering" },
  { name: "dbt", level: 75, category: "Data Engineering" },

  // Analytics & BI
  { name: "Power BI", level: 85, category: "Analytics" },
  { name: "Tableau", level: 80, category: "Analytics" },
  { name: "Looker", level: 75, category: "Analytics" },
  { name: "Excel", level: 90, category: "Analytics" },
  { name: "KPI Design", level: 85, category: "Analytics" },

  // Automation
  { name: "Make", level: 80, category: "Tools" },
  { name: "n8n", level: 75, category: "Tools" },
  { name: "Zapier", level: 70, category: "Tools" },

  // Machine Learning
  { name: "Scikit-learn", level: 75, category: "AI" },
  { name: "TensorFlow", level: 65, category: "AI" },
  { name: "Pandas", level: 85, category: "AI" },
  { name: "NumPy", level: 80, category: "AI" },

  // DevOps
  { name: "Git", level: 85, category: "DevOps" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "CI/CD", level: 65, category: "DevOps" }
];

// Soft Skills
export const softSkills = [
  {
    id: 1,
    name: "Résolution de problèmes",
    icon: "🧩",
    description: "Capacité à analyser des problèmes complexes et trouver des solutions efficaces",
    color: "#FF6B35"
  },
  {
    id: 2,
    name: "Communication",
    icon: "💬",
    description: "Vulgarisation de concepts techniques et présentation de résultats",
    color: "#F7931E"
  },
  {
    id: 3,
    name: "Esprit d'équipe",
    icon: "🤝",
    description: "Collaboration efficace en environnement agile et multidisciplinaire",
    color: "#FDC830"
  },
  {
    id: 4,
    name: "Curiosité",
    icon: "🔍",
    description: "Veille technologique et apprentissage continu des nouvelles technologies",
    color: "#FF8C61"
  },
  {
    id: 5,
    name: "Rigueur",
    icon: "✔",
    description: "Attention aux détails et qualité des livrables data",
    color: "#FF6B35"
  },
  {
    id: 6,
    name: "Adaptabilité",
    icon: "🔄",
    description: "Flexibilité face aux changements et nouvelles méthodologies",
    color: "#F7931E"
  },
  {
    id: 7,
    name: "Pensée analytique",
    icon: "📊",
    description: "Analyse critique des données et prise de décision basée sur les insights",
    color: "#FDC830"
  },
  {
    id: 8,
    name: "Gestion du temps",
    icon: "⏱️",
    description: "Priorisation des tâches et respect des deadlines",
    color: "#FF8C61"
  }
];

// Formation
export const education = [
  {
    id: 1,
    degree: "Data Management & Business",
    school: "Paris School of Technology and Business",
    period: "09/2025 - Aujourd'hui",
    location: "Paris",
    grade: "Master M1 (Bac+4)",
    description: "Formation spécialisée en data management, analyse avancée et pilotage de la donnée au service de la stratégie business",
    subjects: ["Data Management", "Business Intelligence", "Big Data", "Data Strategy", "Machine Learning", "SQL Avancé"]
  },
  {
    id: 2,
    degree: "Data and Artificial Intelligence",
    school: "Paris School of Technology and Business",
    period: "09/2024 - 06/2025",
    location: "Paris",
    grade: "Bachelor (Bac+3)",
    description: "Formation spécialisée en analyse de données, intelligence artificielle et data engineering",
    subjects: ["Python", "SQL Avancé", "Statistiques", "Power BI", "ETL", "Machine Learning"]
  },
  {
    id: 3,
    degree: "Services Informatiques aux Organisations",
    school: "ORT De Montreuil",
    period: "09/2022 - 07/2024",
    location: "Paris",
    grade: "BTS SIO – Option SLAM (Bac+2)",
    description: "Formation en développement logiciel et solutions applicatives métiers (option SLAM)",
    subjects: ["Développement Web", "SQL", "Java", "PHP", "Réseaux", "Cybersécurité"]
  }
];

// Certifications
export const certifications = [
  {
    id: 1,
    name: "DP-900 Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "Février 2025",
    credlyBadgeId: "df9b85f5-1695-4f86-9e1f-2cc5daff30fc",
    description: "Certification professionnelle validant les fondamentaux de la donnée dans l'écosystème Microsoft Azure",
    skills: ["Azure", "Cloud Data", "SQL", "NoSQL", "Data Analytics"]
  }
];
