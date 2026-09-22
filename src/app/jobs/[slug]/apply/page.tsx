import ApplyForm from '@/components/forms/ApplyForm'
import { Card, CardBody } from '@/components/ui/Card'
import { getJob, getJobs } from '@/lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export const dynamicParams = false

export function generateStaticParams() {
    return getJobs().map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const job = getJob(slug)
    if (!job) return {}

    return {
        title: `Apply: ${job.title}`,
        description: `Apply for the ${job.title} position at the Nova Lines office in Chicago, IL.`,
        // The job page is the one that should rank; the form page only duplicates it.
        robots: { index: false, follow: true },
    }
}

export default async function ApplyPage({ params }: Props) {
    const { slug } = await params

    const job = getJob(slug)
    if (!job) notFound()

    return (
        <div className="container px-4 mx-auto lg:mb-12 my-7 max-w-3xl">
            <Link
                href={`/jobs/${job.slug}`}
                className="inline-block mb-6 uppercase transition-colors hover:text-blaze-500 hover:underline underline-offset-4">
                ← {job.title}
            </Link>

            <Card className="overflow-hidden hover:border-border">
                <div className="bg-foreground text-white text-center px-4 py-8 md:px-10">
                    <h1 className="italic mb-4">Apply for {job.title}</h1>
                    <p className="text-muted mt-2">
                        Have questions or just prefer to talk with a recruiter? Fill out the form below and
                        we&apos;ll be in touch shortly.
                    </p>
                </div>

                <CardBody className="py-8 md:py-10">
                    <ApplyForm
                        positions={getJobs().map((j) => j.title)}
                        defaultPosition={job.title}
                    />
                </CardBody>
            </Card>
        </div>
    )
}
