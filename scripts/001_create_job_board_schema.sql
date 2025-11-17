-- Job Board Aggregator - Comprehensive PostgreSQL Schema
-- Includes companies, jobs, sources, user interactions, and full-text search

-- ============================================================================
-- USERS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  profile_picture_url TEXT,
  bio TEXT,
  preferred_tech_stack JSONB DEFAULT '[]'::jsonb,
  preferred_experience_level VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- ============================================================================
-- COMPANIES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS companies (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  website_url TEXT,
  logo_url TEXT,
  description TEXT,
  short_description VARCHAR(500),
  tech_stack JSONB DEFAULT '[]'::jsonb, -- Array of technologies/tools used
  company_size VARCHAR(50), -- 'startup', 'small', 'medium', 'enterprise'
  industry VARCHAR(100),
  headquarters_location VARCHAR(255),
  founded_year INTEGER,
  is_verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_companies_slug ON companies(slug);
CREATE INDEX idx_companies_name ON companies(name);
CREATE INDEX idx_companies_industry ON companies(industry);
CREATE INDEX idx_companies_is_verified ON companies(is_verified);

-- ============================================================================
-- JOB SOURCES TABLE (tracks multiple job aggregator APIs)
-- ============================================================================
CREATE TABLE IF NOT EXISTS job_sources (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE, -- 'linkedin', 'github', 'angellist', 'remoteok', etc.
  api_endpoint TEXT,
  api_key_encrypted TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  rate_limit_per_hour INTEGER,
  last_sync_at TIMESTAMP WITH TIME ZONE,
  sync_error_count INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_job_sources_name ON job_sources(name);
CREATE INDEX idx_job_sources_is_active ON job_sources(is_active);

-- ============================================================================
-- JOBS TABLE (core job listings)
-- ============================================================================
CREATE TABLE IF NOT EXISTS jobs (
  id BIGSERIAL PRIMARY KEY,
  company_id BIGINT REFERENCES companies(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  benefits TEXT,
  
  -- Compensation
  salary_min NUMERIC(10, 2),
  salary_max NUMERIC(10, 2),
  salary_currency VARCHAR(3) DEFAULT 'USD',
  equity_percentage NUMERIC(5, 2),
  
  -- Work arrangement
  remote_level VARCHAR(50) NOT NULL, -- 'remote', 'hybrid', 'on-site'
  office_locations JSONB DEFAULT '[]'::jsonb, -- Array of location objects
  
  -- Technology requirements
  required_tech_stack JSONB DEFAULT '[]'::jsonb,
  nice_to_have_tech JSONB DEFAULT '[]'::jsonb,
  min_experience_years INTEGER,
  max_experience_years INTEGER,
  experience_level VARCHAR(50), -- 'junior', 'mid', 'senior'
  
  -- Job details
  job_type VARCHAR(50), -- 'full-time', 'part-time', 'contract', 'freelance'
  employment_type VARCHAR(50), -- 'permanent', 'temporary', 'internship'
  posting_date DATE,
  deadline_date DATE,
  
  -- Source tracking
  job_source_id BIGINT REFERENCES job_sources(id) ON DELETE SET NULL,
  external_id VARCHAR(255),
  external_url TEXT,
  
  -- Status and metrics
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'closed', 'draft'
  is_featured BOOLEAN DEFAULT FALSE,
  view_count INTEGER DEFAULT 0,
  application_count INTEGER DEFAULT 0,
  save_count INTEGER DEFAULT 0,
  
  -- Full-text search vector
  search_vector TSVECTOR,
  
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Foreign key constraint
ALTER TABLE jobs ADD CONSTRAINT fk_jobs_company_id 
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE;

ALTER TABLE jobs ADD CONSTRAINT fk_jobs_source_id 
  FOREIGN KEY (job_source_id) REFERENCES job_sources(id) ON DELETE SET NULL;

-- Indexes for jobs table
CREATE INDEX idx_jobs_company_id ON jobs(company_id);
CREATE INDEX idx_jobs_job_source_id ON jobs(job_source_id);
CREATE INDEX idx_jobs_slug ON jobs(slug);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_is_featured ON jobs(is_featured);
CREATE INDEX idx_jobs_remote_level ON jobs(remote_level);
CREATE INDEX idx_jobs_experience_level ON jobs(experience_level);
CREATE INDEX idx_jobs_job_type ON jobs(job_type);
CREATE INDEX idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX idx_jobs_posting_date ON jobs(posting_date DESC);
CREATE INDEX idx_jobs_external_id ON jobs(external_id);

-- Full-text search index
CREATE INDEX idx_jobs_search_vector ON jobs USING GIN(search_vector);

-- GIN index for JSONB queries
CREATE INDEX idx_jobs_required_tech ON jobs USING GIN(required_tech_stack);
CREATE INDEX idx_jobs_nice_to_have_tech ON jobs USING GIN(nice_to_have_tech);
CREATE INDEX idx_jobs_office_locations ON jobs USING GIN(office_locations);

-- Salary range composite index
CREATE INDEX idx_jobs_salary_range ON jobs(salary_min, salary_max);

-- ============================================================================
-- USER SAVED JOBS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS user_saved_jobs (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  job_id BIGINT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  saved_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  notes TEXT,
  
  UNIQUE(user_id, job_id)
);

CREATE INDEX idx_user_saved_jobs_user_id ON user_saved_jobs(user_id);
CREATE INDEX idx_user_saved_jobs_job_id ON user_saved_jobs(job_id);
CREATE INDEX idx_user_saved_jobs_saved_at ON user_saved_jobs(saved_at DESC);

-- ============================================================================
-- USER JOB APPLICATIONS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS user_applications (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  job_id BIGINT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'applied', -- 'applied', 'reviewed', 'shortlisted', 'interviewed', 'rejected', 'offered'
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  cover_letter TEXT,
  resume_url TEXT,
  
  -- Application tracking
  interview_date TIMESTAMP WITH TIME ZONE,
  last_status_update TIMESTAMP WITH TIME ZONE,
  feedback_notes TEXT,
  
  -- Metrics
  response_received BOOLEAN DEFAULT FALSE,
  response_received_at TIMESTAMP WITH TIME ZONE,
  
  UNIQUE(user_id, job_id)
);

CREATE INDEX idx_user_applications_user_id ON user_applications(user_id);
CREATE INDEX idx_user_applications_job_id ON user_applications(job_id);
CREATE INDEX idx_user_applications_status ON user_applications(status);
CREATE INDEX idx_user_applications_applied_at ON user_applications(applied_at DESC);
CREATE INDEX idx_user_applications_response_received ON user_applications(response_received);

-- ============================================================================
-- JOB VIEWS/ACTIVITY TABLE (for analytics)
-- ============================================================================
CREATE TABLE IF NOT EXISTS job_views (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  job_id BIGINT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  session_id VARCHAR(255)
);

CREATE INDEX idx_job_views_user_id ON job_views(user_id);
CREATE INDEX idx_job_views_job_id ON job_views(job_id);
CREATE INDEX idx_job_views_viewed_at ON job_views(viewed_at DESC);

-- ============================================================================
-- FULL-TEXT SEARCH TRIGGER FUNCTION
-- ============================================================================
CREATE OR REPLACE FUNCTION update_job_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.requirements, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW.experience_level, '')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_update_job_search_vector
BEFORE INSERT OR UPDATE ON jobs
FOR EACH ROW
EXECUTE FUNCTION update_job_search_vector();

-- ============================================================================
-- TIMESTAMP UPDATE TRIGGER
-- ============================================================================
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_update_users_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER tg_update_companies_timestamp
BEFORE UPDATE ON companies
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER tg_update_jobs_timestamp
BEFORE UPDATE ON jobs
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER tg_update_job_sources_timestamp
BEFORE UPDATE ON job_sources
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- ============================================================================
-- UPDATE COUNT FUNCTIONS
-- ============================================================================
CREATE OR REPLACE FUNCTION increment_job_save_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE jobs SET save_count = save_count + 1 WHERE id = NEW.job_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_increment_job_save_count
AFTER INSERT ON user_saved_jobs
FOR EACH ROW
EXECUTE FUNCTION increment_job_save_count();

CREATE OR REPLACE FUNCTION decrement_job_save_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE jobs SET save_count = GREATEST(save_count - 1, 0) WHERE id = OLD.job_id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_decrement_job_save_count
AFTER DELETE ON user_saved_jobs
FOR EACH ROW
EXECUTE FUNCTION decrement_job_save_count();

CREATE OR REPLACE FUNCTION increment_job_application_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE jobs SET application_count = application_count + 1 WHERE id = NEW.job_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_increment_job_application_count
AFTER INSERT ON user_applications
FOR EACH ROW
EXECUTE FUNCTION increment_job_application_count();

-- ============================================================================
-- PARTIAL INDEXES FOR COMMON QUERIES
-- ============================================================================
CREATE INDEX idx_jobs_active_remote ON jobs(created_at DESC) 
  WHERE status = 'active' AND remote_level = 'remote';

CREATE INDEX idx_jobs_active_featured ON jobs(created_at DESC) 
  WHERE status = 'active' AND is_featured = TRUE;

CREATE INDEX idx_user_applications_pending ON user_applications(user_id) 
  WHERE status IN ('applied', 'reviewed', 'shortlisted', 'interviewed');

-- ============================================================================
-- VIEWS FOR COMMON QUERIES
-- ============================================================================
CREATE OR REPLACE VIEW vw_active_jobs AS
SELECT 
  j.id,
  j.title,
  j.slug,
  j.description,
  j.remote_level,
  j.job_type,
  j.salary_min,
  j.salary_max,
  j.salary_currency,
  j.required_tech_stack,
  j.experience_level,
  j.created_at,
  c.id as company_id,
  c.name as company_name,
  c.logo_url,
  c.industry,
  j.application_count,
  j.save_count,
  j.view_count
FROM jobs j
JOIN companies c ON j.company_id = c.id
WHERE j.status = 'active'
  AND (j.deadline_date IS NULL OR j.deadline_date >= CURRENT_DATE)
ORDER BY j.created_at DESC;

CREATE OR REPLACE VIEW vw_user_job_status AS
SELECT 
  u.id as user_id,
  u.email,
  COUNT(DISTINCT CASE WHEN ua.status = 'applied' THEN ua.id END) as applications_pending,
  COUNT(DISTINCT CASE WHEN ua.status IN ('shortlisted', 'interviewed') THEN ua.id END) as active_interviews,
  COUNT(DISTINCT CASE WHEN ua.status = 'offered' THEN ua.id END) as offers_received,
  COUNT(DISTINCT CASE WHEN ua.status = 'rejected' THEN ua.id END) as rejected_count,
  COUNT(DISTINCT usj.id) as saved_jobs_count
FROM users u
LEFT JOIN user_applications ua ON u.id = ua.user_id
LEFT JOIN user_saved_jobs usj ON u.id = usj.user_id
GROUP BY u.id, u.email;
