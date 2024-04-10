import { Card, CardBody } from '../ui/Card'

interface AsideProps {
  experience?: string
  schedule: string
  type: string
  english: string
}

export default function Aside({ experience, schedule, type, english }: AsideProps) {
  return (
    <Card className="hover:border-border h-fit sticky top-32">
      <CardBody>
        <ul className="flex flex-col gap-6 md:gap-8">
          <li>
            <p className="font-medium mb-1">Experience:</p>
            <span className="text-muted-foreground">{experience ? experience : 'any'}</span>
          </li>

          <li>
            <p className="font-medium mb-1">Schedule:</p>
            <span className="text-muted-foreground">{schedule}</span>
          </li>

          <li>
            <p className="font-medium mb-1">Place of work:</p>
            <span className="text-muted-foreground">
              {type}
            </span>
          </li>

          <li>
            <p className="font-medium mb-1">English level:</p>
            <span className="text-muted-foreground">English {english}</span>
          </li>

          <li>
            <p className="font-medium mb-1">E-mail:</p>
            <span className="text-muted-foreground">jobs@novalines.com</span>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}
