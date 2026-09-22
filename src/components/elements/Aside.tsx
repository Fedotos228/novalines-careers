import Link from 'next/link'
import { Card, CardBody } from '../ui/Card'

interface AsideProps {
    className?: string
    experience?: string
    schedule?: string
    type?: string
    english?: string
}

export default function Aside({ className = '', experience, schedule, type, english }: AsideProps) {
    return (
        <Card className={`hover:border-border h-fit mb-5 md:sticky md:top-32 ${className}`}>
            <CardBody>
                <ul className="flex flex-col gap-6 md:gap-8">
                    {experience && (
                        <li>
                            <p className="font-medium mb-1">Experience:</p>
                            <span className="text-muted-foreground">{experience}</span>
                        </li>
                    )}

                    {schedule && (
                        <li>
                            <p className="font-medium mb-1">Schedule:</p>
                            <span className="text-muted-foreground">{schedule}</span>
                        </li>
                    )}

                    {type && (
                        <li>
                            <p className="font-medium mb-1">Place of work:</p>
                            <span className="text-muted-foreground">{type}</span>
                        </li>
                    )}

                    {english && (
                        <li>
                            <p className="font-medium mb-1">English level:</p>
                            <span className="text-muted-foreground">English {english}</span>
                        </li>
                    )}

                    <li>
                        <p className="font-medium mb-1">E-mail:</p>
                        <Link
                            href="mailto:careers@novalines.com"
                            className="text-muted-foreground transition-colors duration-300 hover:text-blaze-500">
                            careers@novalines.com
                        </Link>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}
