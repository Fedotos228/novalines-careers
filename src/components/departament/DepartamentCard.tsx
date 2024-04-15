import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card'

export default function DepartamentCard({ slug, title, jobs }: DepartamentCardProps) {
    return (
        <Card className="hover:border-border rounded-xl overflow-hidden h-fit">
            <CardHeader className="bg-blaze-500 !px-6 !py-4">
                <Link href={`departaments/${slug}`} className="departament-title flex items-center justify-between text-xl text-background font-medium">
                    {title}
                    <ChevronRight />
                </Link>
            </CardHeader>

            <CardBody className="!pb-3">
                <ul>
                    {jobs.data.slice(0, 2).map((job: any) => (
                        <li key={job.attributes.id} className="mb-3 border-b last:border-none">
                            <Link
                                className="text-foreground transition-colors font-medium duration-300 hover:text-blaze-500"
                                href={`/jobs/${job.attributes.slug}`}>
                                {job.attributes.title}
                            </Link>
                            <p className="text-sm mb-3 mt-1  text-muted-foreground leading-[180%] line-clamp-3 max-h-[83px]">
                                {job.attributes.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </CardBody>

            {jobs.data.length > 3 && (
                <CardFooter className="flex justify-end">
                    <Link
                        href={`/departaments/${slug}`}
                        className="text-muted-foreground hover:text-gray-900 transition-colors duration-300 underline">
                        See all jobs
                    </Link>
                </CardFooter>
            )}
        </Card>
    )
}
