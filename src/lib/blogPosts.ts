export type BlogCategory = "All" | "Laravel" | "APIs" | "React" | "Architecture";

export const categoryColors: Record<BlogCategory, string> = {
  All: "bg-gray-200 text-gray-800",
  Laravel: "bg-red-200 text-red-800",
  APIs: "bg-blue-200 text-blue-800",
  React: "bg-cyan-200 text-cyan-800",
  Architecture: "bg-purple-200 text-purple-800",
};

export interface Post {
  title: string;
  slug: string;
  category: BlogCategory;
  description: string;
  tags: string[];
  author: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    title: "Laravel Clean Architecture",
    slug: "laravel-clean-architecture",
    category: "Laravel",
    description:
      "How to structure Laravel apps with use cases, domain layers, and boundaries for testability & scale.",
    tags: ["Laravel", "PHP", "Architecture", "Backend"],
    author: "John Doe",
    date: "October 26, 2023",
    content: `
      <p>This article explores the principles of Clean Architecture applied to Laravel applications. We'll delve into how to structure your projects to ensure maintainability, testability, and scalability.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Why Clean Architecture?</h2>
      <p>Clean Architecture promotes a separation of concerns, making your codebase independent of frameworks, UI, and databases. This leads to more robust and adaptable applications.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Key Principles:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Independent of Frameworks</li>
        <li>Testable</li>
        <li>Independent of UI</li>
        <li>Independent of Database</li>
      </ul>
      <p class="mt-4">By adhering to these principles, you can build Laravel applications that are easier to understand, modify, and scale over time.</p>
    `,
  },
  {
    title: "Secure API Development",
    slug: "secure-api-development",
    category: "APIs",
    description:
      "Designing secure REST & GraphQL APIs with auth, throttling, validation, and logging.",
    tags: ["API", "Security", "Backend", "GraphQL", "REST"],
    author: "Jane Smith",
    date: "November 10, 2023",
    content: `
      <p>Building secure APIs is paramount in today's digital landscape. This post covers essential strategies for designing and implementing REST and GraphQL APIs that are resilient against common vulnerabilities.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Authentication & Authorization</h2>
      <p>Implementing robust authentication mechanisms like JWT or OAuth, coupled with granular authorization controls, is crucial. We discuss how to properly secure your API endpoints.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Security Best Practices:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Input Validation</li>
        <li>Rate Limiting & Throttling</li>
        <li>Secure Data Transmission (HTTPS)</li>
        <li>Error Handling & Logging</li>
      </ul>
      <p class="mt-4">Follow these guidelines to minimize risks and ensure the integrity and confidentiality of your API resources.</p>
    `,
  },
  {
    title: "React & Vue Optimization",
    slug: "react-vue-optimization",
    category: "React",
    description:
      "Reducing re-renders, bundle splitting, and improving state management in large frontends.",
    tags: ["React", "Vue", "Frontend", "Performance", "JavaScript"],
    author: "Alice Johnson",
    date: "December 1, 2023",
    content: `
      <p>Optimizing frontend performance in large-scale React and Vue applications can significantly enhance user experience. This article dives into techniques for minimizing re-renders and efficient state management.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Performance Bottlenecks</h2>
      <p>Identifying and addressing performance bottlenecks, such as excessive re-renders and large bundle sizes, is key. We explore tools and strategies to profile and improve your application's speed.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Optimization Techniques:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Memoization (React.memo, useMemo, useCallback)</li>
        <li>Lazy Loading & Code Splitting</li>
        <li>Virtualization for Long Lists</li>
        <li>Efficient State Updates</li>
      </ul>
      <p class="mt-4">Applying these optimization patterns will lead to faster loading times and smoother interactions in your frontend applications.</p>
    `,
  },
  {
    title: "Microservice Architecture",
    slug: "microservice-architecture",
    category: "Architecture",
    description:
      "When microservices make sense, how to design boundaries, events, and communication patterns.",
    tags: ["Architecture", "Backend", "Microservices", "System Design"],
    author: "Robert Brown",
    date: "January 15, 2024",
    content: `
      <p>Microservices have become a popular architectural style for building scalable and resilient applications. This post explores when to adopt a microservices approach and how to design effective service boundaries.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Designing Microservice Boundaries</h2>
      <p>The success of a microservice architecture heavily depends on how well service boundaries are defined. We discuss principles like bounded contexts and domain-driven design to help you create loosely coupled services.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Communication Patterns:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Synchronous (REST, gRPC)</li>
        <li>Asynchronous (Message Queues, Event Streaming)</li>
        <li>Event-Driven Architecture</li>
      </ul>
      <p class="mt-4">Choosing the right communication pattern is vital for inter-service communication and ensuring data consistency across your microservices.</p>
    `,
  },
  {
    title: "SSR vs CSR",
    slug: "ssr-vs-csr",
    category: "Architecture",
    description:
      "Trade-offs between SSR, CSR, and hybrid rendering strategies in modern web apps.",
    tags: ["Frontend", "Architecture", "Next.js", "React", "SEO"],
    author: "Emily White",
    date: "February 5, 2024",
    content: `
      <p>Server-Side Rendering (SSR) and Client-Side Rendering (CSR) are two fundamental approaches to rendering web applications, each with its own trade-offs. This article delves into the pros and cons of both, and explores hybrid strategies.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Understanding SSR and CSR</h2>
      <p>SSR involves rendering the full HTML on the server and sending it to the client, while CSR renders the content directly in the browser using JavaScript. We break down how each method works and their impact on performance and SEO.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Hybrid Rendering:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Static Site Generation (SSG)</li>
        <li>Incremental Static Regeneration (ISR)</li>
        <li>Server Components (React)</li>
      </ul>
      <p class="mt-4">Modern frameworks like Next.js offer hybrid rendering capabilities, allowing you to choose the best rendering strategy for different parts of your application.</p>
    `,
  },
  {
    title: "Database Optimization",
    slug: "database-optimization",
    category: "Architecture",
    description:
      "Techniques for optimizing database queries and schema for high-performance applications.",
    tags: ["Database", "SQL", "Performance", "Backend"],
    author: "David Green",
    date: "March 10, 2024",
    content: `
      <p>Database performance is critical for any data-driven application. This article covers various techniques for optimizing database queries, designing efficient schemas, and ensuring your database can handle high loads.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Query Optimization</h2>
      <p>Inefficient queries can quickly become a bottleneck. We explore strategies like proper indexing, avoiding N+1 queries, and using database-specific optimization features to speed up data retrieval.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Schema Design Best Practices:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Normalization vs. Denormalization</li>
        <li>Choosing Appropriate Data Types</li>
        <li>Indexing Strategies</li>
        <li>Partitioning Large Tables</li>
      </ul>
      <p class="mt-4">A well-designed database schema is the foundation for a high-performance application, reducing the need for complex query optimizations later on.</p>
    `,
  },
  {
    title: "Cloud Deployment Strategies",
    slug: "cloud-deployment-strategies",
    category: "Architecture",
    description:
      "Strategies for deploying applications to the cloud using AWS, Azure, and Google Cloud.",
    tags: ["Cloud", "DevOps", "AWS", "Deployment"],
    author: "Sarah Connor",
    date: "April 22, 2024",
    content: `
      <p>Deploying applications to the cloud requires careful planning and strategic choices. This article discusses various cloud deployment strategies, covering popular platforms like AWS, Azure, and Google Cloud, and best practices for ensuring uptime and scalability.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Choosing a Cloud Provider</h2>
      <p>Selecting the right cloud provider depends on your project's specific needs, budget, and existing infrastructure. We compare features and services offered by leading cloud platforms.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Deployment Models:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Infrastructure as a Service (IaaS)</li>
        <li>Platform as a Service (PaaS)</li>
        <li>Serverless Computing (FaaS)</li>
      </ul>
      <p class="mt-4">Understanding different deployment models helps you leverage cloud resources efficiently and optimize operational costs.</p>
    `,
  },
  {
    title: "Testing in Modern Web Development",
    slug: "testing-in-modern-web-development",
    category: "React",
    description:
      "Best practices for unit, integration, and end-to-end testing in React and other modern frameworks.",
    tags: ["Testing", "Frontend", "React", "JavaScript"],
    author: "Michael Chen",
    date: "May 18, 2024",
    content: `
      <p>Comprehensive testing is vital for building robust and reliable web applications. This article explores best practices for implementing unit, integration, and end-to-end tests in modern web development, with a focus on React and other popular frameworks.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Types of Testing</h2>
      <p>We delve into the different levels of testing, from isolated unit tests to broader integration tests and full-system end-to-end tests. Understanding the scope and purpose of each type helps you build a well-rounded test suite.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Testing Frameworks & Libraries:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Jest (Unit Testing)</li>
        <li>React Testing Library (Component Testing)</li>
        <li>Cypress (End-to-End Testing)</li>
        <li>Playwright (End-to-End Testing)</li>
      </ul>
      <p class="mt-4">Leveraging the right tools and strategies ensures your application remains stable and performs as expected across various scenarios.</p>
    `,
  },
];

export const trendingPosts: Post[] = [
  {
    title: "Laravel Clean Architecture",
    slug: "laravel-clean-architecture",
    category: "Laravel" as const,
    description:
      "How to structure Laravel apps with use cases, domain layers, and boundaries for testability & scale.",
    tags: ["Laravel", "PHP", "Architecture", "Backend"],
    author: "John Doe",
    date: "October 26, 2023",
    content: `
      <p>This article explores the principles of Clean Architecture applied to Laravel applications. We'll delve into how to structure your projects to ensure maintainability, testability, and scalability.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Why Clean Architecture?</h2>
      <p>Clean Architecture promotes a separation of concerns, making your codebase independent of frameworks, UI, and databases. This leads to more robust and adaptable applications.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Key Principles:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Independent of Frameworks</li>
        <li>Testable</li>
        <li>Independent of UI</li>
        <li>Independent of Database</li>
      </ul>
      <p class="mt-4">By adhering to these principles, you can build Laravel applications that are easier to understand, modify, and scale over time.</p>
    `,
  },
  {
    title: "Secure API Development",
    slug: "secure-api-development",
    category: "APIs" as const,
    description:
      "Designing secure REST & GraphQL APIs with auth, throttling, validation, and logging.",
    tags: ["API", "Security", "Backend", "GraphQL", "REST"],
    author: "Jane Smith",
    date: "November 10, 2023",
    content: `
      <p>Building secure APIs is paramount in today's digital landscape. This post covers essential strategies for designing and implementing REST and GraphQL APIs that are resilient against common vulnerabilities.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Authentication & Authorization</h2>
      <p>Implementing robust authentication mechanisms like JWT or OAuth, coupled with granular authorization controls, is crucial. We discuss how to properly secure your API endpoints.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Security Best Practices:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Input Validation</li>
        <li>Rate Limiting & Throttling</li>
        <li>Secure Data Transmission (HTTPS)</li>
        <li>Error Handling & Logging</li>
      </ul>
      <p class="mt-4">Follow these guidelines to minimize risks and ensure the integrity and confidentiality of your API resources.</p>
    `,
  },
  {
    title: "React & Vue Optimization",
    slug: "react-vue-optimization",
    category: "React" as const,
    description:
      "Reducing re-renders, bundle splitting, and improving state management in large frontends.",
    tags: ["React", "Vue", "Frontend", "Performance", "JavaScript"],
    author: "Alice Johnson",
    date: "December 1, 2023",
    content: `
      <p>Optimizing frontend performance in large-scale React and Vue applications can significantly enhance user experience. This article dives into techniques for minimizing re-renders and efficient state management.</p>
      <h2 class="text-2xl font-bold text-[var(--heading)] mt-8 mb-4">Performance Bottlenecks</h2>
      <p>Identifying and addressing performance bottlenecks, such as excessive re-renders and large bundle sizes, is key. We explore tools and strategies to profile and improve your application's speed.</p>
      <h3 class="text-xl font-semibold text-[var(--heading)] mt-6 mb-3">Optimization Techniques:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Memoization (React.memo, useMemo, useCallback)</li>
        <li>Lazy Loading & Code Splitting</li>
        <li>Virtualization for Long Lists</li>
        <li>Efficient State Updates</li>
      </ul>
      <p class="mt-4">Applying these optimization patterns will lead to faster loading times and smoother interactions in your frontend applications.</p>
    `,
  },
];
