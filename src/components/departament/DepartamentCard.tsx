'use client'

import Link from 'next/link'


interface DepartamentCardProps {
  slug: string
  title: string
  jobs: {
    data: {
      id: number
      title: string
    }[]
  }
}

export default function DepartamentCard({ slug, title, jobs }: DepartamentCardProps) {
  return (
    <div key={slug}>
      <Link href={`departament/${slug}`}>
        <h5>{title}</h5>
      </Link>
      <ul>
        {jobs.data.map((job: any) => (
          <li key={job.attributes.id}>{job.attributes.title}</li>
        ))}
      </ul>
    </div>
  )
}
