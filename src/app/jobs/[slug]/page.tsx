'use client'

import { instance } from '@/api/api.intercepter'
import Loader from '@/components/Loader'
import CVForm from '@/components/forms/CVForm'
import Breadcrumb from '@/components/ui/Breadcrumb'
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

  if (isFetched) return <Loader />

  return (
    <div className='max-w-[850px] mx-auto mb-12 mt-7'>
      <Breadcrumb />
      <h1>{job.title}</h1>
      {
        job.description &&
        <div
          id="job-description"
          dangerouslySetInnerHTML={{ __html: job.description }}
        >
        </div>
      }
      <CVForm title={job.title} />
    </div>
  )
}
