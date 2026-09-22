import { Job } from '@/data/types'
import Button from './ui/Button'
import { Card, CardBody, CardFooter, CardHeader } from './ui/Card'

export default function JobCard({ job }: { job: Job }) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <h2 className="text-xl font-semibold text-blaze-500">{job.title}</h2>
                {job.type && job.english ? (
                    <div className='flex items-center gap-3 mt-2'>
                        <p className="font-medium">{job.type}</p>
                        <span>/</span>
                        <p className="">English {job.english}</p>
                    </div>
                ) : (
                    <p className="font-medium mt-2">{job.tagline}</p>
                )}
            </CardHeader>
            <CardBody className='flex-1'>
                <p className='text-[#707070] text-sm leading-6 line-clamp-6'>{job.description}</p>
            </CardBody>
            <CardFooter>
                <Button variant="outline" href={`/jobs/${job.slug}`} passHref={true}>
                    Quick apply
                </Button>
            </CardFooter>
        </Card>
    )
}
