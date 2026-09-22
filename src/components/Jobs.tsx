import { DepartmentWithJobs } from '@/lib/content'
import JobCard from './JobCard'

interface JobsProps {
    department: DepartmentWithJobs
}

export default function Jobs({ department }: JobsProps) {
    return (
        <div>
            <div>
                <h2 className="italic mt-7">{department.title}</h2>
                <div className="mt-3 text-muted-foreground">
                    <div
                        id='departament-description'
                        dangerouslySetInnerHTML={{ __html: department.description }}
                        className='my-3'
                    ></div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-7 jobs">
                {department.jobs.map((job) => (
                    <JobCard key={job.slug} job={job} />
                ))}
            </div>
        </div>
    )
}
