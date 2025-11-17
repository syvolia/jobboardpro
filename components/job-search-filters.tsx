'use client'

import React, { useState, useCallback, useMemo, ChangeEvent } from 'react'
import { Search, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

// TypeScript Interfaces
interface LocationOption {
  id: string
  name: string
  country: string
}

interface TechStackItem {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'database'
}

interface SalaryRange {
  min: number
  max: number
}

interface JobSearchFilters {
  searchQuery: string
  locations: string[]
  remoteOptions: ('remote' | 'hybrid' | 'onsite')[]
  jobTypes: ('full-time' | 'part-time' | 'contract')[]
  salaryRange: SalaryRange
  techStack: string[]
}

interface JobSearchFilterProps {
  onFilterChange?: (filters: JobSearchFilters) => void
  onSearch?: (query: string) => void
}

// Sample data
const LOCATIONS: LocationOption[] = [
  { id: '1', name: 'San Francisco', country: 'USA' },
  { id: '2', name: 'New York', country: 'USA' },
  { id: '3', name: 'London', country: 'UK' },
  { id: '4', name: 'Toronto', country: 'Canada' },
  { id: '5', name: 'Berlin', country: 'Germany' },
  { id: '6', name: 'Singapore', country: 'Singapore' },
  { id: '7', name: 'Sydney', country: 'Australia' },
  { id: '8', name: 'Amsterdam', country: 'Netherlands' },
]

const TECH_STACK_OPTIONS: TechStackItem[] = [
  { id: 'react', name: 'React', category: 'frontend' },
  { id: 'vue', name: 'Vue', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend' },
  { id: 'nodejs', name: 'Node.js', category: 'backend' },
  { id: 'python', name: 'Python', category: 'backend' },
  { id: 'golang', name: 'Go', category: 'backend' },
  { id: 'rust', name: 'Rust', category: 'backend' },
  { id: 'swift', name: 'Swift', category: 'mobile' },
  { id: 'kotlin', name: 'Kotlin', category: 'mobile' },
  { id: 'docker', name: 'Docker', category: 'devops' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'devops' },
  { id: 'postgres', name: 'PostgreSQL', category: 'database' },
  { id: 'mongodb', name: 'MongoDB', category: 'database' },
]

const REMOTE_OPTIONS = [
  { value: 'remote' as const, label: 'Remote' },
  { value: 'hybrid' as const, label: 'Hybrid' },
  { value: 'onsite' as const, label: 'On-site' },
]

const JOB_TYPES = [
  { value: 'full-time' as const, label: 'Full-time' },
  { value: 'part-time' as const, label: 'Part-time' },
  { value: 'contract' as const, label: 'Contract' },
]

// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export function JobSearchFilters({ onFilterChange, onSearch }: JobSearchFilterProps) {
  const [filters, setFilters] = useState<JobSearchFilters>({
    searchQuery: '',
    locations: [],
    remoteOptions: [],
    jobTypes: [],
    salaryRange: { min: 0, max: 250000 },
    techStack: [],
  })

  const [locationInput, setLocationInput] = useState('')
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [showTechDropdown, setShowTechDropdown] = useState(false)

  // Debounced search query
  const debouncedSearchQuery = useDebounce(filters.searchQuery, 300)

  // Filter locations based on input
  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter(
      (loc) =>
        !filters.locations.includes(loc.id) &&
        (loc.name.toLowerCase().includes(locationInput.toLowerCase()) ||
          loc.country.toLowerCase().includes(locationInput.toLowerCase()))
    )
  }, [locationInput, filters.locations])

  // Get selected location objects
  const selectedLocations = useMemo(() => {
    return LOCATIONS.filter((loc) => filters.locations.includes(loc.id))
  }, [filters.locations])

  // Get selected tech stack
  const selectedTechStack = useMemo(() => {
    return TECH_STACK_OPTIONS.filter((tech) => filters.techStack.includes(tech.id))
  }, [filters.techStack])

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))
  }

  // Handle location toggle
  const handleLocationToggle = (locationId: string) => {
    setFilters((prev) => ({
      ...prev,
      locations: prev.locations.includes(locationId)
        ? prev.locations.filter((id) => id !== locationId)
        : [...prev.locations, locationId],
    }))
    setLocationInput('')
  }

  // Handle location removal
  const handleLocationRemove = (locationId: string) => {
    setFilters((prev) => ({
      ...prev,
      locations: prev.locations.filter((id) => id !== locationId),
    }))
  }

  // Handle remote option toggle
  const handleRemoteToggle = (option: 'remote' | 'hybrid' | 'onsite') => {
    setFilters((prev) => ({
      ...prev,
      remoteOptions: prev.remoteOptions.includes(option)
        ? prev.remoteOptions.filter((o) => o !== option)
        : [...prev.remoteOptions, option],
    }))
  }

  // Handle job type toggle
  const handleJobTypeToggle = (type: 'full-time' | 'part-time' | 'contract') => {
    setFilters((prev) => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(type)
        ? prev.jobTypes.filter((t) => t !== type)
        : [...prev.jobTypes, type],
    }))
  }

  // Handle salary range change
  const handleSalaryChange = (value: 'min' | 'max', newValue: number) => {
    setFilters((prev) => ({
      ...prev,
      salaryRange: {
        ...prev.salaryRange,
        [value]: newValue,
      },
    }))
  }

  // Handle tech stack toggle
  const handleTechStackToggle = (techId: string) => {
    setFilters((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(techId)
        ? prev.techStack.filter((id) => id !== techId)
        : [...prev.techStack, techId],
    }))
  }

  // Handle tech stack removal
  const handleTechStackRemove = (techId: string) => {
    setFilters((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((id) => id !== techId),
    }))
  }

  // Reset filters
  const handleReset = () => {
    setFilters({
      searchQuery: '',
      locations: [],
      remoteOptions: [],
      jobTypes: [],
      salaryRange: { min: 0, max: 250000 },
      techStack: [],
    })
    setLocationInput('')
    setShowLocationDropdown(false)
    setShowTechDropdown(false)
  }

  // Trigger filter change callback
  React.useEffect(() => {
    onFilterChange?.(filters)
  }, [filters, onFilterChange])

  // Trigger search callback
  React.useEffect(() => {
    onSearch?.(debouncedSearchQuery)
  }, [debouncedSearchQuery, onSearch])

  const hasActiveFilters =
    filters.searchQuery ||
    filters.locations.length > 0 ||
    filters.remoteOptions.length > 0 ||
    filters.jobTypes.length > 0 ||
    filters.techStack.length > 0 ||
    filters.salaryRange.min > 0 ||
    filters.salaryRange.max < 250000

  return (
    <div className="w-full space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search job titles, companies, or keywords..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-6 text-base"
          />
        </div>
      </div>

      {/* Filters Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Location Filter */}
        <div className="relative">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Location
          </label>
          <div className="relative">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="w-full flex items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground hover:border-input focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <span className="text-muted-foreground">
                {selectedLocations.length > 0
                  ? `${selectedLocations.length} selected`
                  : 'Select locations'}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {showLocationDropdown && (
              <div className="absolute right-0 top-full z-50 mt-1 w-full rounded-lg border border-input bg-background shadow-lg">
                <div className="p-2">
                  <Input
                    type="text"
                    placeholder="Search locations..."
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    className="mb-2"
                  />
                  <div className="max-h-48 space-y-1 overflow-y-auto">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => handleLocationToggle(location.id)}
                          className="w-full text-left px-3 py-2 rounded hover:bg-muted text-sm"
                        >
                          {location.name}, {location.country}
                        </button>
                      ))
                    ) : (
                      <p className="px-3 py-2 text-sm text-muted-foreground">
                        No locations found
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Selected Locations */}
          {selectedLocations.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedLocations.map((location) => (
                <div
                  key={location.id}
                  className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {location.name}
                  <button
                    onClick={() => handleLocationRemove(location.id)}
                    className="hover:opacity-70"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Remote Work Filter */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Work Environment
          </label>
          <div className="space-y-2">
            {REMOTE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.remoteOptions.includes(option.value)}
                  onChange={() => handleRemoteToggle(option.value)}
                  className="h-4 w-4 rounded border-input"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Job Type Filter */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Employment Type
          </label>
          <div className="space-y-2">
            {JOB_TYPES.map((type) => (
              <label
                key={type.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.jobTypes.includes(type.value)}
                  onChange={() => handleJobTypeToggle(type.value)}
                  className="h-4 w-4 rounded border-input"
                />
                <span className="text-sm">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Salary Range Filter */}
        <div className="md:col-span-2 lg:col-span-1">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Annual Salary Range
          </label>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">
                Min: ${filters.salaryRange.min.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="250000"
                step="10000"
                value={filters.salaryRange.min}
                onChange={(e) =>
                  handleSalaryChange('min', parseInt(e.target.value))
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">
                Max: ${filters.salaryRange.max.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="250000"
                step="10000"
                value={filters.salaryRange.max}
                onChange={(e) =>
                  handleSalaryChange('max', parseInt(e.target.value))
                }
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Filter */}
        <div className="md:col-span-2 lg:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Tech Stack
          </label>
          <div className="relative">
            <button
              onClick={() => setShowTechDropdown(!showTechDropdown)}
              className="w-full flex items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground hover:border-input focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <span className="text-muted-foreground">
                {selectedTechStack.length > 0
                  ? `${selectedTechStack.length} selected`
                  : 'Select technologies'}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {showTechDropdown && (
              <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-input bg-background shadow-lg">
                <div className="max-h-64 space-y-1 overflow-y-auto p-2">
                  {TECH_STACK_OPTIONS.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => handleTechStackToggle(tech.id)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded text-sm transition-colors',
                        filters.techStack.includes(tech.id)
                          ? 'bg-primary/20 text-primary font-medium'
                          : 'hover:bg-muted'
                      )}
                    >
                      {tech.name}
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({tech.category})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Selected Tech Stack */}
          {selectedTechStack.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedTechStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech.name}
                  <button
                    onClick={() => handleTechStackRemove(tech.id)}
                    className="hover:opacity-70"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="default"
          className="flex-1 md:flex-none"
          onClick={() => {
            /* Trigger search - parent component handles this */
          }}
        >
          Search Jobs
        </Button>
        {hasActiveFilters && (
          <Button variant="outline" onClick={handleReset}>
            Clear Filters
          </Button>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <Card className="bg-muted/50 p-4">
          <div className="text-sm">
            <p className="mb-2 font-semibold text-foreground">Active Filters:</p>
            <div className="flex flex-wrap gap-2">
              {filters.searchQuery && (
                <span className="rounded-full bg-primary/20 px-2 py-1 text-xs text-primary">
                  Search: "{filters.searchQuery}"
                </span>
              )}
              {selectedLocations.map((loc) => (
                <span
                  key={loc.id}
                  className="rounded-full bg-primary/20 px-2 py-1 text-xs text-primary"
                >
                  {loc.name}
                </span>
              ))}
              {filters.remoteOptions.map((opt) => (
                <span
                  key={opt}
                  className="rounded-full bg-primary/20 px-2 py-1 text-xs text-primary"
                >
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </span>
              ))}
              {filters.jobTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-primary/20 px-2 py-1 text-xs text-primary"
                >
                  {type.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              ))}
              {selectedTechStack.map((tech) => (
                <span
                  key={tech.id}
                  className="rounded-full bg-primary/20 px-2 py-1 text-xs text-primary"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
