export interface Job {
  slug: string
  title: string
  tagline: string
  description: string
  responsibilities: string[]
  idealCandidate: string[]
  type?: string
  english?: string
  experience?: string
  schedule?: string
  departmentSlug?: string
}

export interface Department {
  slug: string
  title: string
  /** HTML */
  description: string
}
