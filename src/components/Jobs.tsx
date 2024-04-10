'use client'

import { instance } from '@/api/api.intercepter'
import { useQuery } from '@tanstack/react-query'
import qs from 'qs'
import Loader from './elements/Loader'
import Button from './ui/Button'
import { Card, CardBody, CardFooter, CardHeader } from './ui/Card'

interface JobsProps {
    slug: string
}

const query = qs.stringify({
    fields: ['title', 'slug', 'description'],
    populate: {
        jobs: {
            populate: '*',
        },
    },
})

export default function Jobs({ slug }: JobsProps) {
    const { data, isFetched, isLoading } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () =>
            instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments/${slug}?${query}`),
        select: (data) => data.data.data.attributes,
    })

    if (!isFetched) return <Loader />


    return (
        <div>
            <div>
                <h2 className="italic mt-7">{data.title}</h2>
                <div className="mt-3 text-muted-foreground">
                    <div
                        id='departament-description'
                        dangerouslySetInnerHTML={{ __html: data.description }}
                        className='my-3'
                    ></div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-7 jobs">
                {data.jobs.data.map((job: any) => (
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
