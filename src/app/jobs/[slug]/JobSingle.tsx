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

// ! LASA ASTA AICI PENTRU CA O SA FIE FOLOSIT
{
  /* <CardBody>
<h6 className="font-medium">Responsabilities:</h6>
<ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6">
  <li>Search for loads on US truckload websites</li>
  <li>
      Negotiate competitive rates with brokers based on the current
      market
  </li>
  <li>Perform daily phone calls with brokers and drivers</li>
  <li>Plan and schedule driver&apos;s routes</li>
  <li>
      Use basic computer systems and programs (e.g., Microsoft Excel,
      Google drive, etc) to keep track of your drivers and their loads
  </li>
  <li>
      Make cost-effective decisions to facilitate the best logistics
      and maximize the profit
  </li>
  <li>
      Build and maintain a high level of trust and support with our
      drivers.
  </li>
</ul>

<h6 className="font-medium">What we want:</h6>
<ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6">
  <li>
      Proven experience in dispatching, scheduling, or a related role.
  </li>
  <li>
      Excellent communication skills in English, both verbal and
      written (minimum B2)
  </li>
  <li>
      Proficiency in using dispatching software and other relevant
      tools.
  </li>
  <li>
      Ability to remain calm under pressure and make quick decisions
  </li>
  <li>
      Team player with a positive attitude and willingness to learn.
  </li>
</ul>

<h6 className="font-medium">What we offer:</h6>
<ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6">
  <li>
      Competitive compensation package (from 500$ - Sky is the limit)
  </li>
  <li>Opportunities for professional growth and development.</li>
  <li>Engaging and supportive work environment.</li>
  <li>
      Great office space with lots and lots of parking in the center
      of Chisinau.
  </li>
  <li>Delicious coffee from one of the best coffee shops.</li>
</ul>
</CardBody> */
}
// ! LASA ASTA AICI PENTRU CA O SA FIE FOLOSIT
