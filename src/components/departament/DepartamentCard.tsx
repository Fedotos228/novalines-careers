'use client'

import Link from 'next/link'

interface DepartamentCardProps {
  slug: string
  title: string
  jobs: {
    data: {
      id: number
      title: string
    }[]
  }
}

export default function DepartamentCard({ slug, title, jobs }: DepartamentCardProps) {
  return (
    <div key={slug} className='border border-[#EDEDED] rounded-t-lg'>
      <div className='bg-blaze-500 px-6 py-4 rounded-t-lg'>
        <h5 className='text-white'>{title}</h5>
      </div>
      <ul className='p-6 '>
        {jobs.data.map((job: any) => (
          <li key={job.attributes.id} className='text-[#202020] underline mb-3'>{job.attributes.title}</li>
        ))}
      </ul>
      <div className='flex justify-end'>
        <Link href={`departament/${slug}`} className=' underline px-6 pb-6'>
          See all jobs
        </Link>
      </div>
    </div>
  )
}
