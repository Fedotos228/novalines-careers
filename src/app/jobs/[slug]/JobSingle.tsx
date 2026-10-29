import Button from '@/components/ui/Button'
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card'
import { benefits } from '@/data/benefits'
import { Job } from '@/data/types'

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h6 className="font-medium">{title}</h6>
      <ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6 last:mb-0">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

interface JobSingleProps {
  job: Job
}

export default function JobSingle({ job }: JobSingleProps) {
  return (
    <div className="container px-4 mx-auto lg:mb-12 my-7">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-[1fr_260px]  lg:grid-cols-[1fr_310px] xl:grid-cols-[1fr_410px]lg:gap-8 relative">
        <div>
          <Card className="mb-5 lg:mb-8 hover:border-border">
            <CardHeader>
              <h1>{job.title}</h1>
              <p className="font-medium text-blaze-500 mt-2">{job.tagline}</p>
            </CardHeader>

            <CardBody>
              <p className="mb-6">
                {job.description}
              </p>
              <List title="Key Responsibilities:" items={job.responsibilities} />
              <List title="Ideal Candidate:" items={job.idealCandidate} />
              <List title="Why Nova Lines?" items={benefits} />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-4">
              <p>
                If you&apos;re ready to join a dynamic team and play a vital role in
                ensuring the smooth operation of our services, we want to hear from
                you! To apply, please fill in our application form.
              </p>
              <Button href={`/jobs/${job.slug}/apply`} variant="primary">
                Apply Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
