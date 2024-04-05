'use client'

import { instance } from '@/api/api.intercepter'
import { useQuery } from '@tanstack/react-query'

interface JobSingleProps {
  params: {
    slug: string
  }
}

export default function JobSingle({ params }: JobSingleProps) {
  const { slug } = params

  const { data: job, isFetched } = useQuery({
    queryKey: ['job'],
    queryFn: async () => instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/jobs/${slug}?populate=*`),
    select: data => data.data.data.attributes
  })

  console.log(job)

  if (!isFetched) return <h2>Loading...</h2>

  return (
    <>
      <h1>{job.title}</h1>
      {
        job.description &&
        <div
          id="job-description"
          dangerouslySetInnerHTML={{ __html: job.description }}
        >
        </div>
      }
    </>
  )
}
