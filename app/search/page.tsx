'use client'

import React, { useState, useMemo } from 'react'
import { JobSearchFilters } from '@/components/job-search-filters'
import { JobListingCard } from '@/components/job-listing-card'
import { Pagination } from '@/components/pagination'
import { SortOptions, SortOption } from '@/components/sort-options'
import { Loader2, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// TypeScript Interfaces
interface JobSearchFilters {
  searchQuery: string
  locations: string[]
  remoteOptions: ('remote' | 'hybrid' | 'onsite')[]
  jobTypes: ('full-time' | 'part-time' | 'contract')[]
  salaryRange: { min: number; max: number }
  techStack: string[]
}

interface Job {
  id: string
  companyName: string
  companyLogo: string
  jobTitle: string
  jobType: 'full-time' | 'part-time' | 'contract'
  remoteLevel: 'remote' | 'hybrid' | 'onsite'
  location: string
  salaryMin?: number
  salaryMax?: number
  salaryPeriod?: 'year' | 'month' | 'hour'
  techStack: string[]
  postedDate: Date | string
  source: string
  sourceUrl?: string
}

// Sample job listings data
const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    companyName: 'TechCorp Inc',
    companyLogo: '/tech-company-logo.jpg',
    jobTitle: 'Senior React Developer',
    jobType: 'full-time',
    remoteLevel: 'remote',
    location: 'San Francisco, CA',
    salaryMin: 140000,
    salaryMax: 180000,
    salaryPeriod: 'year',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    source: 'LinkedIn',
    sourceUrl: '#',
  },
  {
    id: '2',
    companyName: 'CloudBase Systems',
    companyLogo: '/cloud-computing-logo.jpg',
    jobTitle: 'Full Stack Engineer',
    jobType: 'full-time',
    remoteLevel: 'hybrid',
    location: 'New York, NY',
    salaryMin: 120000,
    salaryMax: 160000,
    salaryPeriod: 'year',
    techStack: ['Next.js', 'Python', 'AWS', 'GraphQL', 'Kubernetes'],
    postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    source: 'TechJobs',
    sourceUrl: '#',
  },
  {
    id: '3',
    companyName: 'StartupXYZ',
    companyLogo: '/startup-logo.jpg',
    jobTitle: 'Frontend Engineer',
    jobType: 'full-time',
    remoteLevel: 'onsite',
    location: 'Austin, TX',
    salaryMin: 100000,
    salaryMax: 140000,
    salaryPeriod: 'year',
    techStack: ['Vue.js', 'Tailwind CSS', 'Vite'],
    postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    source: 'Indeed',
    sourceUrl: '#',
  },
  {
    id: '4',
    companyName: 'DataScience Labs',
    companyLogo: '/data-science-logo.jpg',
    jobTitle: 'Backend Developer (Contract)',
    jobType: 'contract',
    remoteLevel: 'remote',
    location: 'Remote',
    salaryMin: 70,
    salaryMax: 95,
    salaryPeriod: 'hour',
    techStack: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    source: 'Upwork',
    sourceUrl: '#',
  },
  {
    id: '5',
    companyName: 'FinTech Innovations',
    companyLogo: '/fintech-logo.jpg',
    jobTitle: 'DevOps Engineer',
    jobType: 'full-time',
    remoteLevel: 'hybrid',
    location: 'Boston, MA',
    salaryMin: 130000,
    salaryMax: 170000,
    salaryPeriod: 'year',
    techStack: ['Kubernetes', 'Terraform', 'CI/CD', 'GCP', 'Docker'],
    postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    source: 'LinkedIn',
    sourceUrl: '#',
  },
  {
    id: '6',
    companyName: 'Creative Agency Co',
    companyLogo: '/creative-agency-logo.jpg',
    jobTitle: 'Part-Time UI/UX Developer',
    jobType: 'part-time',
    remoteLevel: 'remote',
    location: 'Remote',
    salaryMin: 45,
    salaryMax: 65,
    salaryPeriod: 'hour',
    techStack: ['Figma', 'React', 'CSS', 'JavaScript'],
    postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    source: 'Stack Overflow',
    sourceUrl: '#',
  },
  // Additional jobs for pagination demo
  {
    id: '7',
    companyName: 'AI Innovations Inc',
    companyLogo: '/tech-company-logo.jpg',
    jobTitle: 'Machine Learning Engineer',
    jobType: 'full-time',
    remoteLevel: 'remote',
    location: 'Remote',
    salaryMin: 150000,
    salaryMax: 200000,
    salaryPeriod: 'year',
    techStack: ['Python', 'TensorFlow', 'Kubernetes', 'Docker'],
    postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    source: 'LinkedIn',
    sourceUrl: '#',
  },
  {
    id: '8',
    companyName: 'Mobile First Corp',
    companyLogo: '/startup-logo.jpg',
    jobTitle: 'iOS Developer',
    jobType: 'full-time',
    remoteLevel: 'hybrid',
    location: 'San Francisco, CA',
    salaryMin: 120000,
    salaryMax: 160000,
    salaryPeriod: 'year',
    techStack: ['Swift', 'iOS', 'SwiftUI'],
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    source: 'Stack Overflow',
    sourceUrl: '#',
  },
  {
    id: '9',
    companyName: 'Web Services Ltd',
    companyLogo: '/cloud-computing-logo.jpg',
    jobTitle: 'Senior Backend Engineer',
    jobType: 'full-time',
    remoteLevel: 'remote',
    location: 'Remote',
    salaryMin: 135000,
    salaryMax: 175000,
    salaryPeriod: 'year',
    techStack: ['Node.js', 'Go', 'PostgreSQL', 'Redis'],
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    source: 'TechJobs',
    sourceUrl: '#',
  },
  {
    id: '10',
    companyName: 'Design Studios',
    companyLogo: '/creative-agency-logo.jpg',
    jobTitle: 'UX/UI Designer',
    jobType: 'full-time',
    remoteLevel: 'onsite',
    location: 'New York, NY',
    salaryMin: 95000,
    salaryMax: 130000,
    salaryPeriod: 'year',
    techStack: ['Figma', 'Sketch', 'Adobe XD'],
    postedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    source: 'LinkedIn',
    sourceUrl: '#',
  },
]

const ITEMS_PER_PAGE = 5

export default function SearchPage() {
  const [filters, setFilters] = useState<JobSearchFilters | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState<SortOption>('relevance')
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveJob = (id: string, saved: boolean) => {
    setSavedJobs((prev) => {
      const newSet = new Set(prev)
      if (saved) {
        newSet.add(id)
      } else {
        newSet.delete(id)
      }
      return newSet
    })
  }

  const handleApplyJob = (id: string) => {
    const job = SAMPLE_JOBS.find((j) => j.id === id)
    if (job?.sourceUrl) {
      window.open(job.sourceUrl, '_blank')
    }
  }

  const handleFilterChange = (newFilters: JobSearchFilters) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page when search changes
  }

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      // Search query filter
      if (
        searchQuery &&
        !job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Location filter
      if (
        filters?.locations.length &&
        !filters.locations.some((loc) =>
          job.location.toLowerCase().includes(loc.toLowerCase()),
        )
      ) {
        return false
      }

      // Remote options filter
      if (
        filters?.remoteOptions.length &&
        !filters.remoteOptions.includes(job.remoteLevel)
      ) {
        return false
      }

      // Job types filter
      if (
        filters?.jobTypes.length &&
        !filters.jobTypes.includes(job.jobType)
      ) {
        return false
      }

      // Salary range filter
      if (filters?.salaryRange) {
        const jobSalaryMin = job.salaryPeriod === 'year' ? job.salaryMin : (job.salaryMin || 0) * 2000
        if (jobSalaryMin < filters.salaryRange.min || jobSalaryMin > filters.salaryRange.max) {
          return false
        }
      }

      // Tech stack filter
      if (filters?.techStack.length) {
        const hasMatchingTech = filters.techStack.some((tech) =>
          job.techStack.some((t) => t.toLowerCase() === tech.toLowerCase()),
        )
        if (!hasMatchingTech) {
          return false
        }
      }

      return true
    })
  }, [filters, searchQuery])

  // Sort jobs
  const sortedJobs = useMemo(() => {
    const jobs = [...filteredJobs]

    switch (sortOption) {
      case 'newest':
        return jobs.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
      case 'oldest':
        return jobs.sort((a, b) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime())
      case 'salary-high':
        return jobs.sort((b, a) => (a.salaryMax || 0) - (b.salaryMax || 0))
      case 'salary-low':
        return jobs.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0))
      case 'relevance':
      default:
        return jobs
    }
  }, [filteredJobs, sortOption])

  // Paginate jobs
  const totalPages = Math.ceil(sortedJobs.length / ITEMS_PER_PAGE)
  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedJobs.slice(start, start + ITEMS_PER_PAGE)
  }, [sortedJobs, currentPage])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b bg-card py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Find Your Next Opportunity
          </h1>
          <p className="mt-2 text-muted-foreground">
            Search through thousands of tech jobs worldwide
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4 space-y-4 rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Filters</h2>
              <JobSearchFilters
                onFilterChange={handleFilterChange}
                onSearch={handleSearchChange}
              />
            </div>
          </aside>

          {/* Results Section */}
          <section className="lg:col-span-3 space-y-6">
            {/* Results Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Results
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {sortedJobs.length === 0
                    ? 'No jobs found'
                    : `Showing ${(currentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(currentPage * ITEMS_PER_PAGE, sortedJobs.length)} of ${sortedJobs.length} jobs`}
                </p>
              </div>

              <div className="flex gap-2">
                <SortOptions value={sortOption} onChange={setSortOption} />
                {savedJobs.size > 0 && (
                  <div className="inline-flex items-center rounded-lg border bg-card px-3 py-2 text-sm font-medium">
                    <span className="text-muted-foreground">Saved: </span>
                    <span className="ml-1 font-semibold">{savedJobs.size}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="rounded-lg border border-dashed py-12 text-center">
                <Loader2 className="mx-auto size-8 animate-spin text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Loading jobs...
                </p>
              </div>
            )}

            {/* Jobs Grid */}
            {!isLoading && paginatedJobs.length > 0 && (
              <div className="grid gap-4">
                {paginatedJobs.map((job) => (
                  <JobListingCard
                    key={job.id}
                    {...job}
                    isSaved={savedJobs.has(job.id)}
                    onSave={handleSaveJob}
                    onApply={handleApplyJob}
                  />
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && paginatedJobs.length === 0 && sortedJobs.length === 0 && (
              <Card className="border-dashed p-12 text-center">
                <AlertCircle className="mx-auto size-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  No jobs found
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your filters or search terms to find more jobs
                </p>
              </Card>
            )}

            {/* Pagination */}
            {!isLoading && sortedJobs.length > ITEMS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
