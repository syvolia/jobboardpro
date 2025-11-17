'use client'

import React, { useState } from 'react'
import { ArrowUpDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export type SortOption = 'newest' | 'oldest' | 'salary-high' | 'salary-low' | 'relevance'

interface SortOptionsProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

const SORT_OPTIONS = [
  { value: 'relevance' as const, label: 'Most Relevant' },
  { value: 'newest' as const, label: 'Newest First' },
  { value: 'oldest' as const, label: 'Oldest First' },
  { value: 'salary-high' as const, label: 'Highest Salary' },
  { value: 'salary-low' as const, label: 'Lowest Salary' },
]

export function SortOptions({ value, onChange }: SortOptionsProps) {
  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === value)?.label || 'Sort By'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <ArrowUpDown className="size-4" />
          <span className="hidden sm:inline">{currentLabel}</span>
          <span className="sm:hidden">Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className={value === option.value ? 'bg-muted' : ''}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
