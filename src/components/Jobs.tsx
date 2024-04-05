'use client'

import { instance } from '@/api/api.intercepter'
import { useQuery } from '@tanstack/react-query'
import qs from 'qs'
import Button from './ui/Button'
import { Card, CardBody, CardFooter, CardHeader } from './ui/Card'

interface JobsProps {
  slug: string
}

const query = qs.stringify({
  fields: ['title', 'slug', 'desc'],
  populate: {
    jobs: {
      populate: '*'
    }
  },
})

export default function Jobs({ slug }: JobsProps) {
  const { data, isFetched, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments/${slug}?${query}`),
    select: data => data.data.data.attributes
  })

  if (!isFetched || isLoading) return <h2>Loading...</h2>

  return (
    <div>
      <div>
        <h2 className='italic mt-7 mb-2'>{data.title}</h2>
        <p className='text-black/70'>{data.desc}</p>
      </div>
      <div className='mt-12 grid gap-7 jobs'>
        {data.jobs.data.map((job: any) => (
          <Card key={job.attributes.slug}>
            <CardHeader>
              <h2 className="text-xl font-semibold text-blaze-500">{job.attributes.title}</h2>
              <p className="text-gray-500 mt-2">{job.attributes.location}</p>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-6 mt-2 text-sm text-secondary flex flex-col gap-2">
                {job.attributes.requirements.map((req: any) => (
                  <li key={req.id} className="text-gray-500">
                    {req.title}
                  </li>
                ))}
              </ul>
              <Button
                variant="link"
                size="custom"
                href={slug}
                target="_blank"
                className="text-sm mt-2">
                More info...
              </Button>
            </CardBody>
            <CardFooter>
              <Button variant="outline" href={`/jobs/${job.attributes.slug}`} passHref={true}>
                Quick apply
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div >
  )
}
