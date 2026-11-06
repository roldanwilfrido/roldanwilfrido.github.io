export const profile = {
  name: 'Roldan Ortiz Molinares',
  title: 'Senior Backend Engineer',
  subtitle: 'Java · Spring Boot · AWS · APIs & Distributed Systems',
  location: 'London, Ontario, Canada',
  email: 'ing.rholdan@gmail.com',
  github: 'https://github.com/roldanwilfrido',
  linkedin: 'https://www.linkedin.com/in/roldan-ortiz-molinares/',
  focus: 'Remote senior backend roles and meaningful engineering problems',
};

export const nav = [
  { label: 'Overview', href: '/', number: '01' },
  { label: 'Projects', href: '/projects/', number: '02' },
  { label: 'Writing', href: '/writing/', number: '03' },
  { label: 'Experience', href: '/experience/', number: '04' },
  { label: 'Contact', href: '/contact/', number: '05' },
];

export const projects = [
  {
    slug: 'sanidapp',
    number: '01',
    kind: 'personal',
    label: 'Independent personal project',
    status: 'Active rebuild · private source',
    title: 'SanidApp',
    lead: 'A multilingual content and learning website, rebuilt with accessibility, privacy, and maintainability in mind.',
    description: 'Modernizing an existing Spanish-language website into a static Astro experience in Spanish, English, and French, with devotional articles, Bible resources, search, and educational activities.',
    stack: ['Astro', 'TypeScript', 'ES · EN · FR', 'Automated tests'],
    url: '/projects/sanidapp/',
  },
  {
    slug: 'job-tracker',
    number: '02',
    kind: 'open-source',
    label: 'For job seekers',
    status: 'Concept · planning',
    title: 'Open-source Job Application Tracker',
    lead: 'A privacy-conscious, self-hosted place to manage applications, interviews, and follow-ups.',
    description: 'A small and approachable application that solves a real problem: keeping dozens of job applications organized without spreading personal data across spreadsheets and services.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker'],
    url: '/projects/job-tracker/',
  },
  {
    slug: 'webhook-inbox',
    number: '03',
    kind: 'open-source',
    label: 'For developers',
    status: 'On the roadmap',
    title: 'Webhook Inbox & Replay',
    lead: 'A practical debugging tool for receiving, inspecting, retrying, and replaying webhook events.',
    description: 'A developer utility designed to make integration failures visible and reproducible, with careful attention to retries, idempotency, and event delivery.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Kafka · planned'],
    url: '/projects/webhook-inbox/',
  },
];

export const notes = [
  {
    slug: 'database-constraints',
    tag: 'Correctness',
    title: 'Preventing duplicate requests starts in the database',
    excerpt: 'Why a unique constraint matters more than an application-side existence check when two requests arrive at once.',
    read: '5 min read',
    href: '/writing/database-constraints/',
  },
  {
    slug: 'java-concurrency',
    tag: 'Java / Learning notes',
    title: 'A practical path through Java concurrency',
    excerpt: 'From race conditions and transactions to optimistic locking, executors, and virtual threads.',
    read: '6 min read',
    href: '/writing/java-concurrency/',
  },
];

export const experience = [
  {
    company: 'Real Time Networks Inc.', role: 'Senior Java Developer', period: 'Apr 2023 — Oct 2026', place: 'Canada · Remote',
    summary: 'Developed Java/Spring Boot services and integrations for cloud and on-premises enterprise products. Contributed to architecture trade-off discussions, code reviews, tests, production troubleshooting, and mentoring.',
    tech: 'Java 11/17 · Spring Boot · AWS · PostgreSQL · SQL Server · DynamoDB · Docker',
  },
  {
    company: 'Avenue Code (GAP)', role: 'Software Developer', period: 'Nov 2021 — Feb 2023', place: 'Remote · US client',
    summary: 'Built and migrated backend services, improved API filtering and error handling, and expanded automated testing using MockMvc.',
    tech: 'Java · Spring Boot · Spring Cloud · MongoDB · MockMvc',
  },
  {
    company: 'Globant', role: 'Software Developer (backend technical leadership)', period: 'Apr 2016 — Nov 2021', place: 'Colombia / United States',
    summary: 'Delivered enterprise Java/Spring and AWS integrations. Led backend delivery for a client project, collaborating with stakeholders, frontend engineers, and DevOps leads to plan integrations and releases.',
    tech: 'Java · Spring · AWS Lambda · API Gateway · Kafka · RabbitMQ · Keycloak',
  },
  {
    company: 'Entelgy', role: 'Java Developer', period: 'Mar 2012 — Apr 2016', place: 'Colombia',
    summary: 'Developed banking and enterprise integrations using Java, Spring, JDBC, and SQL. Improved a banking service’s processing time by approximately 70% through SQL pagination.',
    tech: 'Java/J2EE · Spring · Oracle · SQL · JDBC',
  },
];
