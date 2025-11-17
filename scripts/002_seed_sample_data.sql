-- Job Board Aggregator - Sample Data Initialization
-- This script seeds the database with realistic sample data for testing and development

-- ============================================================================
-- SAMPLE USERS
-- ============================================================================
INSERT INTO users (email, username, password_hash, bio, preferred_tech_stack, preferred_experience_level, created_at)
VALUES
  ('alice.johnson@example.com', 'alice_johnson', '$2b$12$placeholder_hash_1', 'Full-stack developer passionate about React and Node.js', '["JavaScript", "React", "Node.js", "PostgreSQL", "Docker"]'::jsonb, 'mid', CURRENT_TIMESTAMP - INTERVAL '60 days'),
  ('bob.smith@example.com', 'bob_smith', '$2b$12$placeholder_hash_2', 'Senior backend engineer focused on scalability', '["Python", "Go", "Kubernetes", "PostgreSQL", "AWS"]'::jsonb, 'senior', CURRENT_TIMESTAMP - INTERVAL '45 days'),
  ('carol.white@example.com', 'carol_white', '$2b$12$placeholder_hash_3', 'Frontend specialist with design background', '["TypeScript", "React", "Vue", "Tailwind", "Figma"]'::jsonb, 'junior', CURRENT_TIMESTAMP - INTERVAL '30 days');

-- ============================================================================
-- SAMPLE JOB SOURCES
-- ============================================================================
INSERT INTO job_sources (name, api_endpoint, is_active, rate_limit_per_hour, metadata, created_at)
VALUES
  ('LinkedIn', 'https://api.linkedin.com/v2/jobs', TRUE, 100, '{"auth_type": "oauth2"}'::jsonb, CURRENT_TIMESTAMP),
  ('GitHub Jobs', 'https://api.github.com/graphql', TRUE, 60, '{"auth_type": "token"}'::jsonb, CURRENT_TIMESTAMP),
  ('AngelList', 'https://api.angel.co/v1/jobs', TRUE, 50, '{"auth_type": "api_key"}'::jsonb, CURRENT_TIMESTAMP),
  ('RemoteOK', 'https://remoteok.io/api', TRUE, 100, '{"auth_type": "public"}'::jsonb, CURRENT_TIMESTAMP),
  ('We Work Remotely', 'https://weworkremotely.com/remote-jobs.json', TRUE, 50, '{"auth_type": "public"}'::jsonb, CURRENT_TIMESTAMP);

-- ============================================================================
-- SAMPLE COMPANIES
-- ============================================================================
INSERT INTO companies (name, slug, website_url, logo_url, description, short_description, tech_stack, company_size, industry, headquarters_location, founded_year, is_verified, verified_at, created_at)
VALUES
  (
    'TechFlow Inc',
    'techflow-inc',
    'https://techflow.example.com',
    'https://placeholder.example.com/logos/techflow.png',
    'TechFlow is a fast-growing SaaS platform helping developers automate their CI/CD pipelines. We work with cutting-edge technologies and maintain a strong culture of innovation and collaboration.',
    'SaaS platform for CI/CD automation',
    '["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"]'::jsonb,
    'startup',
    'Software Development',
    'San Francisco, CA',
    2020,
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '100 days',
    CURRENT_TIMESTAMP - INTERVAL '120 days'
  ),
  (
    'DataStream Systems',
    'datastream-systems',
    'https://datastream.example.com',
    'https://placeholder.example.com/logos/datastream.png',
    'DataStream Systems specializes in real-time data processing and analytics infrastructure. Our platform powers insights for Fortune 500 companies.',
    'Real-time data processing platform',
    '["Python", "Go", "Rust", "Apache Kafka", "Apache Spark", "AWS"]'::jsonb,
    'medium',
    'Big Data & Analytics',
    'New York, NY',
    2018,
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '150 days',
    CURRENT_TIMESTAMP - INTERVAL '180 days'
  ),
  (
    'CloudVault',
    'cloudvault',
    'https://cloudvault.example.com',
    'https://placeholder.example.com/logos/cloudvault.png',
    'CloudVault provides secure cloud storage and compliance solutions for enterprises. We prioritize security, reliability, and ease of use.',
    'Enterprise cloud storage & compliance',
    '["C++", "Java", "Go", "PostgreSQL", "Elasticsearch", "Azure"]'::jsonb,
    'medium',
    'Cloud Infrastructure',
    'Seattle, WA',
    2017,
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '200 days',
    CURRENT_TIMESTAMP - INTERVAL '250 days'
  ),
  (
    'DesignHub Creative',
    'designhub-creative',
    'https://designhub.example.com',
    'https://placeholder.example.com/logos/designhub.png',
    'DesignHub is a collaborative platform for design teams. We enable seamless workflows across design, development, and product teams.',
    'Design collaboration platform',
    '["React", "TypeScript", "Svelte", "Node.js", "MongoDB", "Redis"]'::jsonb,
    'small',
    'Design Tools',
    'Los Angeles, CA',
    2021,
    FALSE,
    NULL,
    CURRENT_TIMESTAMP - INTERVAL '45 days'
  ),
  (
    'AI Innovations Lab',
    'ai-innovations-lab',
    'https://ailab.example.com',
    'https://placeholder.example.com/logos/ailab.png',
    'AI Innovations Lab is building the next generation of machine learning infrastructure. We focus on making AI accessible to every developer.',
    'ML infrastructure and tools',
    '["Python", "TensorFlow", "PyTorch", "CUDA", "Kubernetes", "GCP"]'::jsonb,
    'startup',
    'Artificial Intelligence',
    'Boston, MA',
    2022,
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '30 days',
    CURRENT_TIMESTAMP - INTERVAL '60 days'
  );

-- ============================================================================
-- SAMPLE JOBS
-- ============================================================================
INSERT INTO jobs (company_id, title, slug, description, requirements, benefits, salary_min, salary_max, salary_currency, equity_percentage, remote_level, office_locations, required_tech_stack, nice_to_have_tech, min_experience_years, max_experience_years, experience_level, job_type, employment_type, posting_date, deadline_date, job_source_id, status, is_featured, created_at)
VALUES
  (
    1,
    'Senior Full-Stack Engineer',
    'senior-full-stack-engineer-techflow',
    'We''re looking for an experienced full-stack engineer to lead our product platform. You''ll work on both frontend and backend systems, mentoring junior engineers and driving architectural decisions.',
    'Senior-level full-stack experience, expertise in TypeScript/React and Node.js, demonstrated experience with PostgreSQL, Docker and Kubernetes, strong system design skills',
    '[$50000, comprehensive health coverage, 20 days PTO, stock options, learning budget]',
    140000,
    180000,
    'USD',
    0.50,
    'hybrid',
    '[{"city": "San Francisco", "state": "CA", "country": "USA"}]'::jsonb,
    '["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"]'::jsonb,
    '["Kubernetes", "GraphQL", "Testing"]'::jsonb,
    5,
    NULL,
    'senior',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '15 days',
    CURRENT_DATE + INTERVAL '30 days',
    1,
    'active',
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '15 days'
  ),
  (
    1,
    'React Frontend Developer',
    'react-frontend-developer-techflow',
    'Join our frontend team and help build beautiful, responsive user interfaces. You''ll work with modern React patterns, participate in code reviews, and contribute to our design system.',
    'Mid-level React experience, proficiency in TypeScript, experience with state management (Redux/Zustand), responsive design and accessibility',
    '[Competitive salary, Remote-first, Health insurance, Professional development fund, Flexible hours]',
    90000,
    130000,
    'USD',
    0.25,
    'remote',
    '[]'::jsonb,
    '["React", "TypeScript", "CSS", "JavaScript"]'::jsonb,
    '["Next.js", "Tailwind", "Testing Library"]'::jsonb,
    2,
    5,
    'mid',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '8 days',
    CURRENT_DATE + INTERVAL '22 days',
    1,
    'active',
    FALSE,
    CURRENT_TIMESTAMP - INTERVAL '8 days'
  ),
  (
    2,
    'Data Platform Engineer',
    'data-platform-engineer-datastream',
    'Build scalable data infrastructure that processes petabytes of data daily. You''ll design and optimize data pipelines, work with Apache Spark and Kafka, and collaborate with data scientists.',
    'Strong Python or Go skills, experience with distributed systems, Apache Spark or Kafka, SQL expertise, familiarity with cloud platforms (AWS/GCP)',
    '[Competitive compensation, Remote, Comprehensive benefits, Stock options, Conference budget, Mentorship program]',
    130000,
    170000,
    'USD',
    0.35,
    'remote',
    '[]'::jsonb,
    '["Python", "Apache Spark", "Kafka", "SQL", "AWS"]'::jsonb,
    '["Go", "Scala", "Kubernetes", "BigQuery"]'::jsonb,
    3,
    NULL,
    'senior',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '5 days',
    CURRENT_DATE + INTERVAL '25 days',
    2,
    'active',
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '5 days'
  ),
  (
    2,
    'Machine Learning Engineer - Junior',
    'ml-engineer-junior-datastream',
    'Start your ML engineering career with us! Work on real-world ML projects, learn from experienced engineers, and contribute to our data science platform.',
    'Recent graduate or bootcamp, strong fundamentals in Python, linear algebra and statistics, basic understanding of ML algorithms, passion for data',
    '[Mentorship, Learning resources, Competitive starting salary, Full benefits, Growth opportunities]',
    70000,
    95000,
    'USD',
    0.10,
    'on-site',
    '[{"city": "New York", "state": "NY", "country": "USA"}]'::jsonb,
    '["Python", "TensorFlow", "SQL"]'::jsonb,
    '["PyTorch", "Jupyter", "Pandas"]'::jsonb,
    0,
    2,
    'junior',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '3 days',
    CURRENT_DATE + INTERVAL '27 days',
    3,
    'active',
    FALSE,
    CURRENT_TIMESTAMP - INTERVAL '3 days'
  ),
  (
    3,
    'Backend Security Specialist',
    'backend-security-specialist-cloudvault',
    'Design and implement security features for our enterprise cloud platform. You''ll work on encryption, authentication systems, and security audits.',
    'Backend development experience, deep understanding of security principles, cryptography knowledge, experience with compliance standards (SOC2, HIPAA)',
    '[Excellent salary, Remote-first, Top-tier benefits, Stock options, Security conference budget]',
    120000,
    160000,
    'USD',
    0.40,
    'remote',
    '[]'::jsonb,
    '["Go", "Java", "Cryptography", "Security"]'::jsonb,
    '["C++", "Rust", "AWS Security", "Kubernetes"]'::jsonb,
    4,
    NULL,
    'senior',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '12 days',
    CURRENT_DATE + INTERVAL '18 days',
    4,
    'active',
    FALSE,
    CURRENT_TIMESTAMP - INTERVAL '12 days'
  ),
  (
    4,
    'Product Designer',
    'product-designer-designhub',
    'Lead design initiatives for our collaboration platform. You''ll work closely with product and engineering teams to create intuitive, beautiful experiences.',
    'Portfolio demonstrating strong UI/UX skills, proficiency in Figma, understanding of design systems, experience with user research',
    '[Competitive salary, Flexible schedule, Health benefits, Design tools budget, Creative freedom]',
    85000,
    125000,
    'USD',
    0.15,
    'hybrid',
    '[{"city": "Los Angeles", "state": "CA", "country": "USA"}]'::jsonb,
    '["Figma", "Design Systems", "UI/UX"]'::jsonb,
    '["Prototyping", "User Research", "Animation"]'::jsonb,
    2,
    6,
    'mid',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '7 days',
    CURRENT_DATE + INTERVAL '23 days',
    NULL,
    'active',
    FALSE,
    CURRENT_TIMESTAMP - INTERVAL '7 days'
  ),
  (
    5,
    'ML Infrastructure Engineer',
    'ml-infrastructure-engineer-ailab',
    'Build the infrastructure that powers AI. Develop tools and frameworks that make ML accessible to thousands of developers worldwide.',
    'Strong systems programming background, experience with Kubernetes and cloud infrastructure, Python proficiency, knowledge of ML frameworks',
    '[Top-tier compensation, Equity, Remote, Unlimited learning budget, Cutting-edge tech stack]',
    150000,
    200000,
    'USD',
    1.00,
    'remote',
    '[]'::jsonb,
    '["Python", "Kubernetes", "CUDA", "C++"]'::jsonb,
    '["Rust", "Distributed Systems", "TensorFlow"]'::jsonb,
    5,
    NULL,
    'senior',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '2 days',
    CURRENT_DATE + INTERVAL '28 days',
    5,
    'active',
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '2 days'
  ),
  (
    5,
    'Developer Advocate',
    'developer-advocate-ailab',
    'Help developers succeed with our ML platform. You''ll create content, lead community initiatives, and gather feedback from our users.',
    'Background in software development, excellent communication skills, experience building developer communities, passion for AI/ML',
    '[Competitive salary, Remote, Conference budget, Speaking opportunities, Community impact fund]',
    80000,
    120000,
    'USD',
    0.20,
    'remote',
    '[]'::jsonb,
    '["Python", "Public Speaking", "Technical Writing"]'::jsonb,
    '["Content Creation", "Community Management"]'::jsonb,
    2,
    NULL,
    'mid',
    'full-time',
    'permanent',
    CURRENT_DATE - INTERVAL '1 day',
    CURRENT_DATE + INTERVAL '29 days',
    5,
    'active',
    FALSE,
    CURRENT_TIMESTAMP - INTERVAL '1 day'
  );

-- ============================================================================
-- SAMPLE USER SAVED JOBS
-- ============================================================================
INSERT INTO user_saved_jobs (user_id, job_id, saved_at, notes)
VALUES
  (1, 1, CURRENT_TIMESTAMP - INTERVAL '20 days', 'Great company culture, interested in the seniority level'),
  (1, 2, CURRENT_TIMESTAMP - INTERVAL '15 days', 'Perfect fit for my experience, remote is ideal'),
  (1, 3, CURRENT_TIMESTAMP - INTERVAL '10 days', 'Consider applying next week'),
  (2, 3, CURRENT_TIMESTAMP - INTERVAL '12 days', 'Right level for my career growth'),
  (2, 5, CURRENT_TIMESTAMP - INTERVAL '8 days', 'Security focus aligns with my interests'),
  (3, 4, CURRENT_TIMESTAMP - INTERVAL '6 days', 'Entry point, strong mentorship program'),
  (3, 7, CURRENT_TIMESTAMP - INTERVAL '3 days', 'AI is my passion, looking at this carefully');

-- ============================================================================
-- SAMPLE USER APPLICATIONS
-- ============================================================================
INSERT INTO user_applications (user_id, job_id, status, applied_at, cover_letter, interview_date, feedback_notes)
VALUES
  (
    1,
    1,
    'interviewed',
    CURRENT_TIMESTAMP - INTERVAL '18 days',
    'I am excited about this opportunity. My experience aligns well with your requirements.',
    CURRENT_TIMESTAMP - INTERVAL '10 days',
    'Strong technical background, good communication skills'
  ),
  (
    1,
    2,
    'shortlisted',
    CURRENT_TIMESTAMP - INTERVAL '12 days',
    'Your React/TypeScript stack is what I work with daily.',
    CURRENT_TIMESTAMP - INTERVAL '5 days',
    'Scheduled for technical interview next week'
  ),
  (
    2,
    3,
    'applied',
    CURRENT_TIMESTAMP - INTERVAL '4 days',
    'Excited to contribute to your data platform.',
    NULL,
    NULL
  ),
  (
    2,
    5,
    'interviewed',
    CURRENT_TIMESTAMP - INTERVAL '9 days',
    'Security engineering is my specialty and passion.',
    CURRENT_TIMESTAMP - INTERVAL '5 days',
    'Excellent security knowledge, moving to final round'
  ),
  (
    3,
    4,
    'applied',
    CURRENT_TIMESTAMP - INTERVAL '2 days',
    'Recent bootcamp graduate looking to start my career.',
    NULL,
    NULL
  ),
  (
    3,
    7,
    'shortlisted',
    CURRENT_TIMESTAMP - INTERVAL '1 day',
    'ML is my passion, your platform looks amazing.',
    CURRENT_TIMESTAMP + INTERVAL '5 days',
    'Code review completed, scheduling technical interview'
  );

-- ============================================================================
-- SAMPLE JOB VIEWS (ANALYTICS)
-- ============================================================================
INSERT INTO job_views (user_id, job_id, viewed_at, session_id)
VALUES
  (1, 1, CURRENT_TIMESTAMP - INTERVAL '21 days', 'sess_abc123'),
  (1, 2, CURRENT_TIMESTAMP - INTERVAL '16 days', 'sess_def456'),
  (1, 3, CURRENT_TIMESTAMP - INTERVAL '11 days', 'sess_ghi789'),
  (1, 1, CURRENT_TIMESTAMP - INTERVAL '9 days', 'sess_jkl012'),
  (2, 3, CURRENT_TIMESTAMP - INTERVAL '13 days', 'sess_mno345'),
  (2, 5, CURRENT_TIMESTAMP - INTERVAL '9 days', 'sess_pqr678'),
  (2, 3, CURRENT_TIMESTAMP - INTERVAL '5 days', 'sess_stu901'),
  (3, 4, CURRENT_TIMESTAMP - INTERVAL '7 days', 'sess_vwx234'),
  (3, 6, CURRENT_TIMESTAMP - INTERVAL '4 days', 'sess_yza567'),
  (3, 7, CURRENT_TIMESTAMP - INTERVAL '2 days', 'sess_bcd890'),
  (NULL, 1, CURRENT_TIMESTAMP - INTERVAL '1 day', 'sess_efg123'),
  (NULL, 2, CURRENT_TIMESTAMP - INTERVAL '1 day', 'sess_hij456'),
  (NULL, 3, CURRENT_TIMESTAMP - INTERVAL '1 day', 'sess_klm789');
