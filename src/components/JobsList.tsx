'use client'

import { instance } from '@/api/api.intercepter'
import { useQuery } from '@tanstack/react-query'
import qs from 'qs'

interface JobsListProps {
  slug: string
}

const query = qs.stringify({
  fields: ['title', 'slug'],
  populate: {
    jobs: {
      populate: '*'
    }
  },
})

export default function JobsList({ slug }: JobsListProps) {
  const { data } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments/${slug}?${query}`),
    select: data => data.data.data.attributes
  })

  console.log(data)

  return (
    <div className='container mx-auto'>
      <h2>{data.title}</h2>
      <div ></div>
    </div>
  )
}
