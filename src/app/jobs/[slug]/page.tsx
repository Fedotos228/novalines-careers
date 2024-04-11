import JobSingle from './JobSingle';

interface JobSingleProps {
    params: {
        slug: string;
    };
}

export default function JobSinglePage({ params }: JobSingleProps) {
    const { slug } = params;

    return <JobSingle slug={slug} />;
}
