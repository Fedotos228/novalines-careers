import { getJob, getJobs } from '@/lib/content'
import { notFound } from 'next/navigation'
import JobSingle from './JobSingle';

interface JobSingleProps {
    params: Promise<{
        slug: string;
    }>;
}

export const dynamicParams = false

export function generateStaticParams() {
    return getJobs().map((job) => ({ slug: job.slug }))
}

export default async function JobSinglePage({ params }: JobSingleProps) {
    const { slug } = await params;

    const job = getJob(slug)
    if (!job) notFound()

    return <JobSingle job={job} />;
}
