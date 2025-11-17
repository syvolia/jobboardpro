-- Job Board Aggregator - Useful Queries for Common Operations
-- Reference queries for development and testing

-- ============================================================================
-- FULL-TEXT SEARCH EXAMPLES
-- ============================================================================

-- Example 1: Search for jobs by keyword
-- This query demonstrates full-text search functionality
/*
SELECT 
  j.id,
  j.title,
  j.slug,
  c.name as company_name,
  j.remote_level,
  j.salary_min,
  j.salary_max,
  ts_rank_cd(j.search_vector, q.query) as relevance
FROM jobs j
JOIN companies c ON j.company_id = c.id,
plainto_tsquery('english', 'backend python') as q
WHERE j.search_vector @@ q
  AND j.status = 'active'
ORDER BY relevance DESC
LIMIT 20;
*/

-- Example 2: Search for jobs with specific tech stack
-- Find all active jobs requiring specific technologies
/*
SELECT 
  j.id,
  j.title,
  j.slug,
  c.name as company_name,
  j.required_tech_stack,
  j.salary_min,
  j.salary_max
FROM jobs j
JOIN companies c ON j.company_id = c.id
WHERE j.status = 'active'
  AND j.required_tech_stack @> '["React", "TypeScript"]'::jsonb
  AND j.remote_level IN ('remote', 'hybrid')
ORDER BY j.created_at DESC;
*/

-- Example 3: Find remote jobs with salary range filter
/*
SELECT 
  j.id,
  j.title,
  j.slug,
  c.name as company_name,
  j.remote_level,
  j.salary_min,
  j.salary_max,
  j.experience_level
FROM jobs j
JOIN companies c ON j.company_id = c.id
WHERE j.status = 'active'
  AND j.remote_level = 'remote'
  AND j.salary_min >= 100000
  AND j.salary_max <= 180000
  AND j.experience_level IN ('mid', 'senior')
ORDER BY j.salary_max DESC;
*/

-- ============================================================================
-- USER INTERACTION QUERIES
-- ============================================================================

-- Example 4: Get user saved jobs with company details
-- Show all jobs saved by a specific user with full details
/*
SELECT 
  usj.id as saved_job_id,
  usj.saved_at,
  usj.notes,
  j.id as job_id,
  j.title,
  j.slug,
  c.id as company_id,
  c.name as company_name,
  c.logo_url,
  j.remote_level,
  j.salary_min,
  j.salary_max,
  j.experience_level,
  j.created_at as job_posted_at
FROM user_saved_jobs usj
JOIN jobs j ON usj.job_id = j.id
JOIN companies c ON j.company_id = c.id
WHERE usj.user_id = 1
  AND j.status = 'active'
ORDER BY usj.saved_at DESC;
*/

-- Example 5: Get user's application history and status
-- Track all applications for a specific user
/*
SELECT 
  ua.id as application_id,
  ua.status,
  ua.applied_at,
  ua.interview_date,
  ua.response_received_at,
  j.title,
  j.slug,
  c.name as company_name,
  c.logo_url,
  j.salary_min,
  j.salary_max,
  CASE 
    WHEN ua.status = 'applied' THEN 'Waiting to hear back'
    WHEN ua.status = 'reviewed' THEN 'Under review'
    WHEN ua.status = 'shortlisted' THEN 'Moving forward'
    WHEN ua.status = 'interviewed' THEN 'Interview scheduled'
    WHEN ua.status = 'offered' THEN 'Offer received'
    WHEN ua.status = 'rejected' THEN 'Not selected'
    ELSE ua.status
  END as status_label,
  CURRENT_TIMESTAMP - ua.applied_at as days_since_applied
FROM user_applications ua
JOIN jobs j ON ua.job_id = j.id
JOIN companies c ON j.company_id = c.id
WHERE ua.user_id = 1
ORDER BY ua.applied_at DESC;
*/

-- Example 6: Find users who haven't applied yet but saved a job
/*
SELECT DISTINCT
  u.id,
  u.email,
  u.username,
  COUNT(DISTINCT usj.job_id) as saved_jobs_count
FROM users u
JOIN user_saved_jobs usj ON u.id = usj.user_id
LEFT JOIN user_applications ua ON u.id = ua.user_id 
  AND usj.job_id = ua.job_id
WHERE ua.id IS NULL
  AND usj.saved_at < CURRENT_TIMESTAMP - INTERVAL '7 days'
GROUP BY u.id, u.email, u.username
ORDER BY saved_jobs_count DESC;
*/

-- ============================================================================
-- ANALYTICS QUERIES
-- ============================================================================

-- Example 7: Most popular jobs by views and saves
-- Identify trending jobs on the platform
/*
SELECT 
  j.id,
  j.title,
  j.slug,
  c.name as company_name,
  j.view_count,
  j.save_count,
  j.application_count,
  COUNT(DISTINCT jv.id) as recent_views_7days,
  ROUND((j.application_count::numeric / NULLIF(j.view_count, 0)) * 100, 2) as application_rate_percent
FROM jobs j
LEFT JOIN job_views jv ON j.id = jv.job_id 
  AND jv.viewed_at > CURRENT_TIMESTAMP - INTERVAL '7 days'
JOIN companies c ON j.company_id = c.id
WHERE j.status = 'active'
GROUP BY j.id, j.title, j.slug, c.name, j.view_count, j.save_count, j.application_count
ORDER BY recent_views_7days DESC, j.view_count DESC
LIMIT 20;
*/

-- Example 8: Companies with most active job postings
-- Show which companies are actively hiring
/*
SELECT 
  c.id,
  c.name,
  c.slug,
  c.logo_url,
  c.industry,
  COUNT(DISTINCT j.id) as active_job_count,
  SUM(j.view_count) as total_job_views,
  SUM(j.application_count) as total_applications,
  MAX(j.created_at) as latest_job_posted
FROM companies c
LEFT JOIN jobs j ON c.id = j.company_id AND j.status = 'active'
GROUP BY c.id, c.name, c.slug, c.logo_url, c.industry
HAVING COUNT(DISTINCT j.id) > 0
ORDER BY active_job_count DESC, total_applications DESC;
*/

-- Example 9: Technology demand analysis
-- Which technologies are most in demand
/*
SELECT 
  tech,
  COUNT(*) as job_count,
  ROUND(COUNT(*)::numeric / (SELECT COUNT(*) FROM jobs WHERE status = 'active') * 100, 2) as percent_of_jobs
FROM (
  SELECT jsonb_array_elements(required_tech_stack) ->> 0 as tech
  FROM jobs
  WHERE status = 'active'
    AND required_tech_stack != '[]'::jsonb
) tech_breakdown
GROUP BY tech
ORDER BY job_count DESC
LIMIT 20;
*/

-- Example 10: User engagement metrics
-- See how engaged users are with the platform
/*
SELECT 
  u.id,
  u.email,
  u.username,
  COUNT(DISTINCT jv.id) as views_count,
  COUNT(DISTINCT usj.id) as saved_jobs_count,
  COUNT(DISTINCT ua.id) as applications_count,
  SUM(CASE WHEN ua.status = 'offered' THEN 1 ELSE 0 END) as offers_received,
  MAX(jv.viewed_at) as last_view_date,
  MAX(ua.applied_at) as last_application_date
FROM users u
LEFT JOIN job_views jv ON u.id = jv.user_id
LEFT JOIN user_saved_jobs usj ON u.id = usj.user_id
LEFT JOIN user_applications ua ON u.id = ua.user_id
GROUP BY u.id, u.email, u.username
ORDER BY last_view_date DESC NULLS LAST;
*/

-- ============================================================================
-- MAINTENANCE QUERIES
-- ============================================================================

-- Example 11: Update job counters (in case they get out of sync)
-- Recalculate view counts for all jobs
/*
UPDATE jobs j
SET view_count = (
  SELECT COUNT(*) FROM job_views 
  WHERE job_id = j.id
);

UPDATE jobs j
SET save_count = (
  SELECT COUNT(*) FROM user_saved_jobs 
  WHERE job_id = j.id
);

UPDATE jobs j
SET application_count = (
  SELECT COUNT(*) FROM user_applications 
  WHERE job_id = j.id
);
*/

-- Example 12: Clean up old job views (retention policy)
-- Delete job views older than 90 days
/*
DELETE FROM job_views
WHERE viewed_at < CURRENT_TIMESTAMP - INTERVAL '90 days';
*/

-- Example 13: Update job source sync status
-- Mark last sync time for a job source
/*
UPDATE job_sources
SET 
  last_sync_at = CURRENT_TIMESTAMP,
  sync_error_count = 0
WHERE name = 'LinkedIn'
  AND last_sync_at < CURRENT_TIMESTAMP - INTERVAL '1 hour';
*/

-- ============================================================================
-- REPORTING QUERIES
-- ============================================================================

-- Example 14: Weekly job posting report
-- Analyze job posting trends
/*
SELECT 
  DATE_TRUNC('week', j.created_at)::DATE as week_start,
  c.industry,
  COUNT(DISTINCT j.id) as jobs_posted,
  AVG(j.salary_min) as avg_salary_min,
  AVG(j.salary_max) as avg_salary_max,
  COUNT(DISTINCT CASE WHEN j.remote_level = 'remote' THEN j.id END) as remote_jobs
FROM jobs j
JOIN companies c ON j.company_id = c.id
WHERE j.created_at > CURRENT_TIMESTAMP - INTERVAL '30 days'
GROUP BY DATE_TRUNC('week', j.created_at), c.industry
ORDER BY week_start DESC, jobs_posted DESC;
*/

-- Example 15: User-company interaction summary
-- See which companies attract the most user interest
/*
SELECT 
  c.id,
  c.name,
  c.slug,
  COUNT(DISTINCT jv.user_id) as unique_viewers,
  COUNT(DISTINCT usj.user_id) as unique_savers,
  COUNT(DISTINCT ua.user_id) as unique_applicants,
  COUNT(DISTINCT jv.id) as total_views,
  COUNT(DISTINCT usj.id) as total_saves,
  COUNT(DISTINCT ua.id) as total_applications
FROM companies c
LEFT JOIN jobs j ON c.id = j.company_id AND j.status = 'active'
LEFT JOIN job_views jv ON j.id = jv.job_id
LEFT JOIN user_saved_jobs usj ON j.id = usj.job_id
LEFT JOIN user_applications ua ON j.id = ua.job_id
GROUP BY c.id, c.name, c.slug
HAVING COUNT(DISTINCT jv.id) > 0 
  OR COUNT(DISTINCT usj.id) > 0 
  OR COUNT(DISTINCT ua.id) > 0
ORDER BY total_views DESC;
*/
