'use client'

import { instance } from '@/api/api.intercepter'
import Aside from '@/components/elements/Aside'
import Loader from '@/components/elements/Loader'
import CVForm from '@/components/forms/CVForm'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card'
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
    queryFn: async () =>
      instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/jobs/${slug}?populate=*`),
    select: (data) => data.data.data.attributes,
  })

  if (!isFetched) return <Loader />

  return (
    <div className="container px-4 mx-auto mb-12 mt-7">
      <Breadcrumb className="mb-6" page={job.title as string} />

      <div className="grid gap-5 grid-cols-1 md:grid-cols-[1fr_260px]  lg:grid-cols-[1fr_310px] xl:grid-cols-[1fr_410px] lg:gap-8 relative">
        <div>
          <Card className=" mb-8 hover:border-border">
            <CardHeader>
              <h1>{job.title}</h1>
            </CardHeader>

            <CardBody>
              <p className='mt-4'>
                {job.description}
              </p>
            </CardBody>

            <CardFooter>
              <p>
                If you&apos;re ready to join a dynamic team and play a vital role in
                ensuring the smooth operation of our services, we want to hear from
                you! To apply, please send your CV down below.
              </p>
            </CardFooter>
          </Card>
          <CVForm title={job.title} />
        </div>
        <Aside
          experience={job.experience}
          schedule={job.schedule}
          type={job.type}
          english={job.english}
        />
      </div>
    </div>
  )
}
