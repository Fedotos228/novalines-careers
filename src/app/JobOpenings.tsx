import JobCard from '@/components/JobCard'
import { getJobs } from '@/lib/content'

export default function JobOpenings() {
  const jobs = getJobs()

  return (
    <div className='container mx-auto mb-7 p-4'>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    </div>
  )
}
