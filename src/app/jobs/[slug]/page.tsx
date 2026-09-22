import { JOBS_DATE_POSTED, OFFICE, SITE_URL } from '@/constants/site'
import { benefits } from '@/data/benefits'
import { Job } from '@/data/types'
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

const list = (title: string, items: string[]) =>
    `<p><strong>${title}</strong></p><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`

// schema.org JobPosting for Google for Jobs; needs the full office address.
function jobPostingJsonLd(job: Job) {
    if (!OFFICE.streetAddress || !OFFICE.postalCode) return null

    return {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: [
            `<p>${job.description}</p>`,
            list('Key Responsibilities', job.responsibilities),
            list('Ideal Candidate', job.idealCandidate),
            list('Why Nova Lines?', benefits),
        ].join(''),
        datePosted: JOBS_DATE_POSTED,
        directApply: true,
        url: `${SITE_URL}/jobs/${job.slug}`,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'Nova Lines',
            sameAs: SITE_URL,
            logo: `${SITE_URL}/LogotypeOrange.png`,
        },
        jobLocation: {
            '@type': 'Place',
            address: { '@type': 'PostalAddress', ...OFFICE },
        },
    }
}

export default async function JobSinglePage({ params }: JobSingleProps) {
    const { slug } = await params;

    const job = getJob(slug)
    if (!job) notFound()

    const jsonLd = jobPostingJsonLd(job)

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
                />
            )}
            <JobSingle job={job} />
        </>
    );
}
