'use client'

import { instance } from '@/api/api.intercepter'
import Loader from '@/components/elements/Loader'
import Button from '@/components/ui/Button'
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card'
import { useQuery } from '@tanstack/react-query'
import qs from 'qs'

const query = qs.stringify({
  fields: ['title', 'slug', 'description', 'type', 'english'],
})

export default function JobOpenings() {
  const { data: jobs, isFetched } = useQuery({
    queryKey: ['all jobbs'],
    queryFn: async () => instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/jobs?${query}`),
    select: (data) => data.data.data,
  })

  if (!isFetched) return <Loader loading={isFetched} />

  return (
    <div className='container mx-auto mb-7 p-4'>
      <div className="mt-12 grid grid-cols-2 gap-7 jobs">
        {jobs.map((job: any) => (
          <Card key={job.attributes.slug}>
            <CardHeader>
              <h2 className="text-xl font-semibold text-blaze-500">
                {job.attributes.title}
              </h2>
              <div className='flex items-center gap-3 mt-2'>
                <p className="font-medium">{job.attributes.type}</p>
                <span>/</span>
                <p className="">English {job.attributes.english}</p>
              </div>
            </CardHeader>
            <CardBody className='h-[215px]'>
              <p className='text-[#707070] text-sm leading-6 line-clamp-6'>
                {job.attributes.description}
              </p>
            </CardBody>
            <CardFooter>
              <Button
                variant="outline"
                href={`/jobs/${job.attributes.slug}`}
                passHref={true}>
                Quick apply
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
