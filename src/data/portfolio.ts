export const profile = {
  name: "Nguyen Khanh Duy",
  role: "Software Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyenkhanhduy.work@gmail.com",
  phone: "(+84) 81 825 8855",
  github: "https://github.com/dauphaiduy",
  linkedin: "https://www.linkedin.com/in/duy-nguyễn-khánh-5b9b2130a",
  summary:
    "Software Engineer with 3+ years of experience in fintech and banking, building reliable services, event-driven integrations, and large-scale data processing systems.",
  availability:
    "Seeking backend engineering roles focused on scalable distributed systems, fintech platforms, and technical excellence",
};

export const stats = [
  { label: "Years experience", value: "3+" },
  { label: "Banking projects", value: "7" },
  { label: "Core stack", value: "Golang" },
];

export const skills = [
  "Golang",
  "NestJS",
  "TypeScript",
  "ReactJS",
  "REST APIs",
  "Microservices",
  "Kafka",
  "BullMQ",
  "Redis",
  "Oracle Database",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Docker",
  "Kubernetes",
  "GitLab CI/CD",
  "Way4 Platform",
  "SFTP Integration",
  "Batch Processing",
  "Agile Scrum",
];

export const capabilities = [
  {
    title: "Backend Services",
    description:
      "Design and build APIs, microservices, card workflows, and service-to-service integrations for banking and fintech products.",
  },
  {
    title: "Event-Driven Systems",
    description:
      "Implement Kafka consumers, event mapping, validation, notifications, and synchronized workflows across internal platforms.",
  },
  {
    title: "Job Automation",
    description:
      "Develop scheduled jobs, queue workers, retry and backoff strategies, SFTP transfers, and financial batch processing.",
  },
  {
    title: "Data & Reliability",
    description:
      "Model database changes, optimize production systems, synchronize multiple databases, and support monitoring and incident resolution.",
  },
];

export const techStack = [
  {
    category: "Languages & APIs",
    items: ["Golang", "TypeScript", "NestJS", "ReactJS", "REST APIs", "gRPC"],
  },
  {
    category: "Messaging & Jobs",
    items: ["Kafka", "BullMQ", "Redis", "SFTP Integration", "Batch Processing"],
  },
  {
    category: "Databases",
    items: ["Oracle Database", "PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    category: "Platform & Domain",
    items: [
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
      "Way4 Platform",
      "Digital Banking",
      "Payment Integration",
    ],
  },
];

export const projects = [
  {
    slug: "cnf-job-management-platform",
    title: "CNF Job Management Platform",
    type: "Financial Automation",
    year: "2025 - Present",
    description:
      "Backend platform that automates financial data exchange between internal services and partner systems through scheduled jobs, SFTP file transfer, Kafka events, and multi-database synchronization.",
    impact:
      "Delivered reliable daily and monthly financial workflows with queue workers, retry strategies, batch and stream processing, structured logging, health checks, and production monitoring.",
    stack: [
      "NestJS",
      "TypeScript",
      "BullMQ",
      "Redis",
      "Kafka",
      "gRPC",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Docker",
    ],
  },
  {
    slug: "ocb-igen",
    title: "OCB iGen",
    type: "Digital Banking",
    year: "2023 - 2025",
    description:
      "Digital credit card solution that enables customers to obtain a credit card within minutes through OCB OMNI, with card issuance, card management, and core banking integrations.",
    impact:
      "Designed and developed backend APIs, optimized database structures, customized Way4 card processing events, maintained production systems, and collaborated across BA, QA, and stakeholder teams.",
    stack: ["Golang", "ReactJS", "Oracle Database", "Way4", "Kafka", "REST APIs"],
  },
  {
    slug: "apple-pay-napas",
    title: "Apple Pay Napas",
    type: "Payment Integration",
    year: "2023 - 2025",
    description:
      "Card tokenization and transaction processing integrations supporting Apple Pay and Napas card services for secure digital payment capabilities.",
    impact:
      "Built transaction and tokenization APIs, configured Way4 card products and event flows, enhanced database support for payment features, and supported testing, deployment, and production operations.",
    stack: ["Golang", "Oracle Database", "Way4", "REST APIs", "Napas Integration"],
  },
  {
    slug: "way4-event-processing",
    title: "Way4 Event Processing",
    type: "Event Integration",
    year: "2023 - 2025",
    description:
      "Integration services that consume Kafka messages generated from Way4 events and synchronize card, transaction, and customer data with internal banking systems and Liobank.",
    impact:
      "Improved downstream banking workflows with Kafka consumers, notification integrations, data synchronization, event mapping, and validation rules.",
    stack: ["Golang", "Kafka", "Oracle Database", "Way4"],
  },
  {
    slug: "ocb-omni-4",
    title: "OCB OMNI 4.0",
    type: "Digital Banking Migration",
    year: "2022 - 2023",
    description:
      "Migration and enhancement of OCB's digital banking platform from OMNI 3.0 to OMNI 4.0, focused on card management capabilities and customer experience improvements.",
    impact:
      "Developed backend APIs for card services, implemented card retrieval, cancellation, and credit limit workflows, optimized production systems, and coordinated with QA and business teams.",
    stack: ["Golang", "ReactJS", "Oracle Database", "Way4", "REST APIs"],
  },
  {
    slug: "liobank",
    title: "Liobank",
    type: "Digital Banking",
    year: "2022 - 2023",
    description:
      "Digital banking platform providing integrated debit and credit card services for customer management and card lifecycle operations.",
    impact:
      "Built backend card operations services, card information APIs, and production support processes while participating in requirement analysis and technical design.",
    stack: ["Golang", "Oracle Database", "Way4", "REST APIs"],
  },
  {
    slug: "podoc-print-on-demand",
    title: "PODOC Print On Demand",
    type: "Graduation Project",
    year: "2021 - 2022",
    description:
      "Web-based print-on-demand platform that lets customers customize clothing products online while helping sellers manage inventory efficiently.",
    impact:
      "Built the application from scratch, gathered requirements, designed schemas and architecture, and implemented product customization and order management features.",
    stack: ["ReactJS", "MySQL", "REST APIs"],
  },
];

export const experience = [
  {
    role: "Backend Software Engineer",
    company: "Lotte C&F",
    period: "May 2025 - Present",
    summary:
      "Develops financial automation backend services for scheduled jobs, SFTP transfers, Kafka events, background processing, and multi-database synchronization.",
  },
  {
    role: "Senior Software Engineer",
    company: "Orient Commercial Joint Stock Bank (OCB)",
    period: "October 2023 - May 2025",
    summary:
      "Built and supported digital credit card, Apple Pay, Napas, and Way4 event processing systems across Golang services, Oracle databases, Kafka, and Way4 integrations.",
  },
  {
    role: "Software Engineer",
    company: "Orient Commercial Joint Stock Bank (OCB)",
    period: "October 2022 - October 2023",
    summary:
      "Enhanced OCB OMNI 4.0 and Liobank card services, including backend APIs, card lifecycle functions, database changes, production support, and cross-team delivery.",
  },
  {
    role: "Software Engineer (Graduation Project)",
    company: "FPT University",
    period: "December 2021 - April 2022",
    summary:
      "Developed PODOC, a print-on-demand platform, from requirements and architecture through product customization, inventory, and order management functionality.",
  },
];
