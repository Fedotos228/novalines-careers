import { departments } from '@/data/departments'
import { jobs } from '@/data/jobs'

export function getJobs() {
  return jobs
}

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug)
}

export function getDepartments() {
  return departments.map((department) => ({
    ...department,
    jobs: jobs.filter((job) => job.departmentSlug === department.slug),
  }))
}

export function getDepartment(slug: string) {
  return getDepartments().find((department) => department.slug === slug)
}

export type DepartmentWithJobs = ReturnType<typeof getDepartments>[number]
